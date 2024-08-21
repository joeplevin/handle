import React, {useEffect} from 'react';
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  StatusBar,
  Switch,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from 'react-native';
import {useState} from 'react';
import {useForm, Controller, set} from 'react-hook-form';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {listInventoryItems} from '../../src/graphql/queries';
import {createInvoiceItem} from '../../src/graphql/mutations';
import {createInventoryItem} from '../../src/graphql/mutations';
import {updateInvoiceItem} from '../../src/graphql/mutations';
import {updateInventoryItem} from '../../src/graphql/mutations';
import {generateClient} from 'aws-amplify/api';
import OpenAI from 'openai';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {useInvoice} from '../../context/InvoiceContext';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import moment from 'moment';
import {array, z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import InvoiceItemComplete from './InvoiceItemComplete';

const client = generateClient();
const openai = new OpenAI({
  apiKey: 'sk-proj-IkqjrAAzp6Z01kQuXD1xT3BlbkFJH3DaiJlGfbwoTJBkjCgf',
});

const testItems = [
  {
    name: '400g Rega San Marzano Tomatoes Tinned',
    pricePerUnit: 2.5,
    totalQuantity: 10,
    unitWeight: '',
    unitMeasurement: 'grams',
  },
  {
    name: '250g Fresh Heritage Tomatoes',
    pricePerUnit: 1.59,
    totalQuantity: 5,
    unitWeight: '250',
    unitMeasurement: 'grams',
  },
];

const InvoiceReviewItemModal = ({
  visible,
  setVisible,
  itemReviewed,
  setItemReviewed,
}) => {
  const {
    parseInvoiceItemData,
    setParseInvoiceItemData,
    invoiceItemReviewData,
    setInvoiceItemReviewData,
    inventoryItemData,
    setInventoryItemData,
    parseInvoiceData,
    setParseInvoiceData,
    parseInvoiceSupplierData,
    setParseInvoiceSupplierData,
    userPoolId,
    invoiceUrl,
    invoiceName,
    inventoryItemsBeforeUpdate,
    setInventoryItemsBeforeUpdate,
    inventoryItemsAfterUpdate,
    setInventoryItemsAfterUpdate,
    savedInvoiceItems,
    setSavedInvoiceItems,
  } = useInvoice();
  // Initialise from context

  const [invoiceItems, setInvoiceItems] = useState(parseInvoiceItemData);
  const [itemCount, setItemCount] = useState(parseInvoiceItemData.length);
  // const [itemCount, setItemCount] = useState(0);
  // const [invoiceItem, setInvoiceItem] = useState(invoiceItems[0]);
  const [invoiceItem, setInvoiceItem] = useState(
    parseInvoiceItemData[itemCount] - 1,
  );
  const [invoice, setInvoice] = useState(parseInvoiceData);
  const [selectedItem, setSelectedItem] = useState(null);
  const [matched, setMatched] = useState(false);
  const [created, setCreated] = useState(false);
  const [inventoryItem, setInventoryItem] = useState();
  const [supplierInventory, setSupplierInventory] = useState({
    supplierId: '',
    inventoryItemId: '',
    supplier: {},
    inventoryItem: {},
  });
  const [reviewed, setReviewed] = useState(false);
  const [accepted, setAccepted] = useState(true);

  const [confirming, setConfirming] = useState(false);

  // Set up state for inventory items
  const [inventoryItems, setInventoryItems] = useState([]);
  const [createdInventoryItem, setCreatedInventoryItem] = useState({});

  // Set up state for matched items
  const [loading, setLoading] = useState(false);
  const [matchedItems, setMatchedItems] = useState([]);

  // Set up state for created invoice item data
  const [createdInvoiceItem, setCreatedInvoiceItem] = useState({});
  const [acceptedItems, setAcceptedItems] = useState([]);
  const [rejected, setRejected] = useState(false);
  const [rejectedItems, setRejectedItems] = useState([]);
  const [complete, setComplete] = useState(false);
  const [itemLinked, setItemLinked] = useState(false);
  const [itemUpdated, setItemUpdated] = useState(false);

  // Expiry Date
  let today = new Date();
  let expiry = new Date(today.setDate(today.getDate() + 7));
  const [expiryDate, setExpiryDate] = useState(expiry);

  //Date Picker
  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    newDate = new Date(currentDate);
    setExpiryDate(newDate);
  };
  const showMode = currentMode => {
    DateTimePickerAndroid.open({
      mode: currentMode,
      value: expiryDate,
      onChange: onDateChange,
      is24Hour: false,
    });
  };
  const showDatepicker = () => {
    showMode('date');
  };

  // Update invoice items
  const updateInvoiceItems = updatedItem => {
    setInvoiceItems(prevItems =>
      prevItems.map((item, index) =>
        index === itemCount ? updatedItem : item,
      ),
    );
  };

  const updateReviewedItems = updatedItem => {
    setInvoiceItemReviewData(prevItems => {
      if (prevItems) {
        if (prevItems[itemCount]) {
          return prevItems.map((item, index) =>
            index === itemCount ? updatedItem : item,
          );
        } else {
          return [...prevItems, updatedItem];
        }
      } else {
        return [updatedItem];
      }
    });
  };

  // If all items are processed, set invoiceItem to empty

  //Set up form

  const formSchema = z
    .object({
      name: z.string().min(1, 'Name is required'),
      totalQuantity: z
        .string()
        .min(1, 'Quantity is required')
        .refine(val => parseInt(val, 10) > 0, {
          message: 'Quantity must be more than 0',
        }),
      unitWeight: z
        .string()
        .min(1, 'Unit Weight is required')
        .refine(val => parseFloat(val) > 0, {
          message: 'Unit Weight must be more than 0',
        }),
      unitMeasurement: z.string().refine(val => val !== '', {
        message: 'Unit Measurement is required',
      }),
      pricePerUnit: z
        .string()
        .min(1, 'Price Per Unit is required')
        .refine(val => /^\d+\.\d{2}$/.test(val), {
          message: 'Price Per Unit must be in 2 decimal place format',
        })
        .refine(val => parseFloat(val) > 0, {
          message: 'Price Per Unit cannot be 0',
        }),
      expiryDate: z
        .string()
        .refine(val => moment(expiryDate, 'ddd MMM DD YYYY').isValid(), {
          message: 'Expiry Date must be a valid date',
        })
        .refine(
          val =>
            moment(expiryDate, 'ddd MMM DD YYYY').isSameOrAfter(
              moment(),
              'day',
            ),
          {message: "Expiry Date cannot be earlier than today's date"},
        ),

      minQuantity: z
        .string()
        .min(1, 'Min Quantity is required')
        .refine(val => parseInt(val, 10) > 0, {
          message: 'Min Quantity must be more than 0',
        }),
      accepted: z.boolean(),
      rejectionReasons: z.string().optional(),
      rejectedQuantity: z.string().optional(),
    })
    .refine(
      data => {
        const totalQuantity = parseInt(data.totalQuantity, 10);
        const rejectedQuantity = parseInt(data.rejectedQuantity, 10);
        if (isNaN(rejectedQuantity)) return true; // If rejectedQuantity is not provided or not a number, skip this check
        return rejectedQuantity <= totalQuantity;
      },
      {
        message: 'Rejected Quantity cannot exceed quantity',
        path: ['rejectedQuantity'], // This specifies where the error message should appear
      },
    )
    .refine(
      data => {
        if (!data.accepted) {
          const rejectedQuantity = parseInt(data.rejectedQuantity, 10);
          return rejectedQuantity > 0;
        }
        return true;
      },
      {
        message: 'Item rejected but no quantity provided',
        path: ['rejectedQuantity'],
      },
    );

  const {reset, handleSubmit, control} = useForm({
    defaultValues: {
      name: invoiceItem['name'] ? invoiceItem['name'] : '',
      totalQuantity: invoiceItem['totalQuantity']
        ? invoiceItem['totalQuantity'].toString()
        : '',
      unitWeight: invoiceItem['unitWeight']
        ? invoiceItem['unitWeight'].toString()
        : '',
      unitMeasurement: invoiceItem['unitMeasurement']
        ? invoiceItem['unitMeasurement'].toString()
        : '',
      pricePerUnit: invoiceItem['pricePerUnit']
        ? parseInt(invoiceItem['pricePerUnit']).toFixed(2).toString()
        : '',
      expiryDate: expiryDate ? expiryDate.toDateString() : '',
      accepted: invoiceItem['accepted'] ? invoiceItem['accepted'] : true,
      minQuantity: invoiceItemReviewData
        ? invoiceItemReviewData[itemCount]
          ? invoiceItemReviewData[itemCount]['minQuantity']
            ? invoiceItemReviewData[itemCount]['minQuantity'].toString()
            : '0'
          : '0'
        : '0',
      rejectionReasons: invoiceItem['rejectionReasons']
        ? invoiceItem['rejectionReasons']
        : '',
      rejectedQuantity: invoiceItem['rejectedQuantity']
        ? invoiceItem['rejectedQuantity'].toString()
        : parseInt(invoiceItem['acceptedQuantity']) <
          parseInt(invoiceItem['totalQuantity'])
        ? (
            parseInt(invoiceItem['totalQuantity']) -
            parseInt(invoiceItem['acceptedQuantity'])
          ).toString()
        : '',
    },
    resolver: zodResolver(formSchema),
  });

  // Reset form on new item
  useEffect(() => {
    setInventoryItems(inventoryItemsBeforeUpdate);

    // testing

    setInvoiceItemReviewData([
      {
        accepted: true,
        acceptedQuantity: 10,
        expiryDate: '2024-08-18T13:38:59.459Z',
        minQuantity: '05',
        name: '400g Rega San Marzano Tomatoes Tinned',
        pricePerUnit: '2.00',
        rejectedQuantity: 0,
        rejectionReasons: '',
        totalQuantity: '10',
        unitMeasurement: 'grams',
        unitWeight: '400',
      },
      {
        accepted: true,
        acceptedQuantity: 5,
        expiryDate: '2024-08-18T13:38:59.459Z',
        minQuantity: '05',
        name: '250g Fresh Heritage Tomatoes',
        pricePerUnit: '1.00',
        rejectedQuantity: 0,
        rejectionReasons: '',
        totalQuantity: '5',
        unitMeasurement: 'grams',
        unitWeight: '250g',
      },
      {
        accepted: false,
        acceptedQuantity: 5,
        expiryDate: '2024-08-18T13:38:59.459Z',
        minQuantity: '05',
        name: '500g Carrots',
        pricePerUnit: '2.00',
        rejectedQuantity: '5',
        rejectionReasons: 'expired',
        totalQuantity: '10',
        unitMeasurement: 'grams',
        unitWeight: '500g',
      },
      {
        accepted: false,
        acceptedQuantity: 0,
        expiryDate: '2024-08-18T13:38:59.459Z',
        minQuantity: '05',
        name: '6 Pack Braeburn Apples',
        pricePerUnit: '3.00',
        rejectedQuantity: '7',
        rejectionReasons: 'expired',
        totalQuantity: '7',
        unitMeasurement: 'units',
        unitWeight: '1',
      },
    ]);
    setInventoryItemsAfterUpdate([
      {
        __typename: 'InventoryItem',
        createdAt: '2024-08-06T17:52:45.602Z',
        groups: ['41806c6ad4ecc1f1ccd3cbff0f9f5efa'],
        id: '4f9af293-0c78-4033-9740-a25a36ab4267',
        invoiceItems: {
          __typename: 'ModelInvoiceItemConnection',
          nextToken: null,
        },
        minQuantity: 1,
        name: '400g Rega San Marzano Tomatoes Tinned',
        orderList: {
          __typename: 'ModelInventoryItemOrderConnection',
          nextToken: null,
        },
        owner: '764262d4-20e1-701f-0536-96e985c137f0',
        suppliers: {
          __typename: 'ModelSupplierInventoryConnection',
          nextToken: null,
        },
        totalQuantity: 150,
        totalWeight: 60000,
        unitAveragePrice: 2,
        unitMeasurement: 'grams',
        unitWeight: 400,
        updatedAt: '2024-08-11T13:39:49.251Z',
        usedInRecipes: {
          __typename: 'ModelRecipeItemConnection',
          nextToken: null,
        },
        waste: {__typename: 'ModelWasteItemConnection', nextToken: null},
      },
      {
        __typename: 'InventoryItem',
        createdAt: '2024-08-06T17:10:36.234Z',
        groups: ['41806c6ad4ecc1f1ccd3cbff0f9f5efa'],
        id: 'adbc218f-1124-45fd-a02f-d855e1618a01',
        invoiceItems: {
          __typename: 'ModelInvoiceItemConnection',
          nextToken: null,
        },
        minQuantity: 10,
        name: '250g Fresh Heritage Tomatoes',
        orderList: {
          __typename: 'ModelInventoryItemOrderConnection',
          nextToken: null,
        },
        owner: '764262d4-20e1-701f-0536-96e985c137f0',
        suppliers: {
          __typename: 'ModelSupplierInventoryConnection',
          nextToken: null,
        },
        totalQuantity: 25,
        totalWeight: 6250,
        unitAveragePrice: 1,
        unitMeasurement: 'grams',
        unitWeight: 250,
        updatedAt: '2024-08-11T13:40:43.750Z',
        usedInRecipes: {
          __typename: 'ModelRecipeItemConnection',
          nextToken: null,
        },
        waste: {__typename: 'ModelWasteItemConnection', nextToken: null},
      },
      {
        __typename: 'InventoryItem',
        createdAt: '2024-08-06T17:13:39.741Z',
        groups: ['41806c6ad4ecc1f1ccd3cbff0f9f5efa'],
        id: '6d256ce5-ff60-4acc-92d6-974691ac1c7a',
        invoiceItems: {
          __typename: 'ModelInvoiceItemConnection',
          nextToken: null,
        },
        minQuantity: 10,
        name: '500g Carrots',
        orderList: {
          __typename: 'ModelInventoryItemOrderConnection',
          nextToken: null,
        },
        owner: '764262d4-20e1-701f-0536-96e985c137f0',
        suppliers: {
          __typename: 'ModelSupplierInventoryConnection',
          nextToken: null,
        },
        totalQuantity: 35,
        totalWeight: 17500,
        unitAveragePrice: 2,
        unitMeasurement: 'grams',
        unitWeight: 500,
        updatedAt: '2024-08-11T13:42:16.449Z',
        usedInRecipes: {
          __typename: 'ModelRecipeItemConnection',
          nextToken: null,
        },
        waste: {__typename: 'ModelWasteItemConnection', nextToken: null},
      },
    ]);
    setSavedInvoiceItems([
      {
        __typename: 'InvoiceItem',
        accepted: true,
        acceptedQuantity: 10,
        createdAt: '2024-08-11T13:39:14.742Z',
        expiryDate: '2024-08-18T13:38:59.459Z',
        groups: ['41806c6ad4ecc1f1ccd3cbff0f9f5efa'],
        id: '1f99094a-067d-4313-a1c7-0f4671485999',
        inventoryItem: null,
        inventoryItemId: '4f9af293-0c78-4033-9740-a25a36ab4267',
        inventoryItemInvoiceItemsId: null,
        invoice: null,
        invoiceId: '63b44bfd-fc22-40fa-a490-95f454672dc1',
        invoiceItemsId: null,
        name: '400g Rega San Marzano Tomatoes Tinned',
        owner: '764262d4-20e1-701f-0536-96e985c137f0',
        pricePerUnit: 2,
        rejectionReasons: '',
        totalQuantity: 10,
        unitMeasurement: 'grams',
        unitWeight: 400,
        updatedAt: '2024-08-11T13:39:52.073Z',
      },
      {
        __typename: 'InvoiceItem',
        accepted: true,
        acceptedQuantity: 5,
        createdAt: '2024-08-11T13:40:07.148Z',
        expiryDate: '2024-08-18T13:38:59.459Z',
        groups: ['41806c6ad4ecc1f1ccd3cbff0f9f5efa'],
        id: '916b3502-c9b2-47cd-92cc-4979e449fa33',
        inventoryItem: null,
        inventoryItemId: 'adbc218f-1124-45fd-a02f-d855e1618a01',
        inventoryItemInvoiceItemsId: null,
        invoice: null,
        invoiceId: '63b44bfd-fc22-40fa-a490-95f454672dc1',
        invoiceItemsId: null,
        name: '250g Fresh Heritage Tomatoes',
        owner: '764262d4-20e1-701f-0536-96e985c137f0',
        pricePerUnit: 1,
        rejectionReasons: '',
        totalQuantity: 5,
        unitMeasurement: 'grams',
        unitWeight: 250,
        updatedAt: '2024-08-11T13:40:46.626Z',
      },
      {
        __typename: 'InvoiceItem',
        accepted: false,
        acceptedQuantity: 5,
        createdAt: '2024-08-11T13:41:36.127Z',
        expiryDate: '2024-08-18T13:38:59.459Z',
        groups: ['41806c6ad4ecc1f1ccd3cbff0f9f5efa'],
        id: '610628f8-8c04-4faf-abfa-c34582db4ddb',
        inventoryItem: null,
        inventoryItemId: '6d256ce5-ff60-4acc-92d6-974691ac1c7a',
        inventoryItemInvoiceItemsId: null,
        invoice: null,
        invoiceId: '63b44bfd-fc22-40fa-a490-95f454672dc1',
        invoiceItemsId: null,
        name: '500g Carrots',
        owner: '764262d4-20e1-701f-0536-96e985c137f0',
        pricePerUnit: 2,
        rejectionReasons: 'expired',
        totalQuantity: 10,
        unitMeasurement: 'grams',
        unitWeight: 500,
        updatedAt: '2024-08-11T13:42:19.046Z',
      },
      {
        __typename: 'InvoiceItem',
        accepted: false,
        acceptedQuantity: 0,
        createdAt: '2024-08-11T13:42:41.193Z',
        expiryDate: '2024-08-18T13:38:59.459Z',
        groups: ['41806c6ad4ecc1f1ccd3cbff0f9f5efa'],
        id: '354f8f15-ff6e-4dba-beda-375db70fd840',
        inventoryItem: null,
        inventoryItemId: null,
        inventoryItemInvoiceItemsId: null,
        invoice: null,
        invoiceId: '63b44bfd-fc22-40fa-a490-95f454672dc1',
        invoiceItemsId: null,
        name: '6 Pack Braeburn Apples',
        owner: '764262d4-20e1-701f-0536-96e985c137f0',
        pricePerUnit: 3,
        rejectionReasons: 'expired',
        totalQuantity: 7,
        unitMeasurement: 'units',
        unitWeight: 1,
        updatedAt: '2024-08-11T13:42:41.193Z',
      },
    ]);

    if (itemCount === invoiceItems.length) {
      setInvoiceItem({
        name: '',
        totalQuantity: 0,
        unitWeight: 0,
        unitMeasurement: '',
        pricePerUnit: 0.0,
      });
    } else {
      // const currentInvoiceItem = invoiceItems[itemCount];
      // console.log('current invoice item: ', currentInvoiceItem);
      // setAccepted(
      //   currentInvoiceItem['accepted'] === false
      //     ? currentInvoiceItem['accepted']
      //     : true,
      // );
      // setCreated(false);
      // setMatched(false);
      // setSelectedItem(null);
      // setCreatedInventoryItem({});
      // setMatchedItems([]);
      // setInvoiceItem(currentInvoiceItem);
      // setItemUpdated(false);
      // setItemLinked(false);
      // reset({
      //   name: currentInvoiceItem['name'] ? currentInvoiceItem['name'] : '',
      //   totalQuantity: currentInvoiceItem['totalQuantity']
      //     ? currentInvoiceItem['totalQuantity'].toString()
      //     : '',
      //   unitWeight: currentInvoiceItem['unitWeight']
      //     ? currentInvoiceItem['unitWeight'].toString()
      //     : '',
      //   unitMeasurement: currentInvoiceItem['unitMeasurement']
      //     ? currentInvoiceItem['unitMeasurement']
      //     : '',
      //   pricePerUnit: currentInvoiceItem['pricePerUnit']
      //     ? parseInt(currentInvoiceItem['pricePerUnit']).toFixed(2).toString()
      //     : '',
      //   expiryDate: expiryDate ? expiryDate.toDateString() : '',
      //   accepted:
      //     currentInvoiceItem['accepted'] === false
      //       ? currentInvoiceItem['accepted']
      //       : true,
      //   minQuantity: invoiceItemReviewData
      //     ? invoiceItemReviewData[itemCount]
      //       ? invoiceItemReviewData[itemCount]['minQuantity']
      //         ? invoiceItemReviewData[itemCount]['minQuantity'].toString()
      //         : '0'
      //       : '0'
      //     : '0',
      //   rejectionReasons: currentInvoiceItem['rejectionReasons']
      //     ? currentInvoiceItem['rejectionReasons']
      //     : '',
      //   rejectedQuantity: currentInvoiceItem['rejectedQuantity']
      //     ? currentInvoiceItem['rejectedQuantity'].toString()
      //     : parseInt(currentInvoiceItem['acceptedQuantity']) <
      //       parseInt(currentInvoiceItem['totalQuantity'])
      //     ? (
      //         parseInt(currentInvoiceItem['totalQuantity']) -
      //         parseInt(currentInvoiceItem['acceptedQuantity'])
      //       ).toString()
      //     : '',
      // });
    }
    console.log('current item: ', invoiceItem);
    console.log('current item count: ', itemCount);
    console.log('current invoice review data: ', invoiceItemReviewData);
    console.log('current inventory after update: ', inventoryItemsAfterUpdate);
    console.log('all current saved invoice items: ', savedInvoiceItems);
    console.log('correct saved invoice items: ', invoiceItems);
  }, [invoiceItems, itemCount]);

  const onSubmit = async data => {
    setLoading(true);
    console.log('here');
    // setLoading(true);
    console.log('data', data);
    formSchema.safeParse(data);
    console.log('data: ', data);
    const dateToSave = moment(expiryDate);
    data['expiryDate'] = dateToSave;
    console.log('expiryDate: ', data['expiryDate']);
    console.log('date to save: ', dateToSave);
    console.log('confirmed item data: ', data);
    updateReviewedItems(data);
    console.log('updated item: ', invoiceItemReviewData);
    data['acceptedQuantity'] =
      parseInt(data['totalQuantity']) - parseInt(data['rejectedQuantity']);
    console.log('accepted quantity: ', data['acceptedQuantity']);
    if (data['accepted'] === true) {
      data['acceptedQuantity'] = parseInt(data['totalQuantity']);
      data['rejectedQuantity'] = 0;
      data['rejectionReasons'] = '';
    }
    console.log('accepted after reject: ', data['totalQuantity']);
    console.log('data on save: ', data);
    console.log('invoice id: ', parseInvoiceData['id']);
    try {
      const result = await client.graphql({
        query: createInvoiceItem,
        variables: {
          input: {
            invoiceId: '63b44bfd-fc22-40fa-a490-95f454672dc1',
            name: data['name'],
            totalQuantity: parseInt(data['totalQuantity']),
            acceptedQuantity: parseInt(data['acceptedQuantity']),
            unitWeight: parseFloat(data['unitWeight']),
            unitMeasurement: data['unitMeasurement'],
            pricePerUnit: parseFloat(data['pricePerUnit']),
            expiryDate: data['expiryDate'],
            accepted: data['accepted'],
            rejectionReasons: data['rejectionReasons'],
            groups: userPoolId.toString(),
          },
        },
      });
      console.log(
        'created invoice item: ',
        result['data']['createInvoiceItem'],
      );
      updateInvoiceItems(result['data']['createInvoiceItem']);
      setSavedInvoiceItems(prev => [
        ...prev,
        result['data']['createInvoiceItem'],
      ]);
      if (data['acceptedQuantity'] === 0) {
        setRejected(true);
      }
      setReviewed(true);
      setLoading(false);
    } catch (error) {
      console.log('Error: ', error);
      Alert.alert('Error saving details. Please try again.');
    } finally {
      console.log('parsed data before submit: ', parseInvoiceItemData);
      console.log('reviewed: ', reviewed);
    }
  };

  // Get Inventory Items

  // Match invoiceItem with Inventory
  const matchInventory = async () => {
    setLoading(true);
    console.log('Matching invoice item with inventory items...');
    console.log('Invoice Item: ', invoiceItemReviewData[itemCount]['name']);
    let matches = null;
    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: `Find the potential matches between this ${JSON.stringify(
              invoiceItemReviewData[itemCount]['name'],
            )} and the 'name' attribute list of inventory item objects ${JSON.stringify(
              inventoryItems,
            )}. If there are matches, return the matching inventory items an array of the original json objects. If there is no match, return a string 'not found'. This response is being used directly in code, so do not include any additional information.`,
          },
        ],
        model: 'gpt-4o-mini',
        temperature: 1,
        max_tokens: 10000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      if (response.choices[0].message.content.typeof === 'string') {
        Alert.alert('No match found');
      } else {
        console.log('Response: ', response.choices[0].message.content);
        let res = response.choices[0].message.content;
        res = res.replace(/```json\s*([\s\S]*?)\s*```/, '$1');

        // Extract the JSON content within the brackets
        const jsonMatch = res.match(/\[.*\]|\{.*\}/s);
        console.log('JSON Match: ', jsonMatch);
        if (jsonMatch) {
          const jsonString = jsonMatch[0];
          console.log('Matches: ', jsonString);
          matches = JSON.parse(jsonString);
        } else {
          console.log('No match found');
        }
      }
    } catch (error) {
      console.log('Error: ', error);
      Alert.alert('Error: Please try again');
    } finally {
      setMatchedItems(matches.length >= 1 ? matches : []);
      setLoading(false);
      setMatched(true);
      console.log('Matched Items: ', matchedItems);
    }
  };

  // Accept item
  const onPressNext = () => {
    // navigation.navigate('InvoiceReviewItemScreen', {
    //   itemCount: itemCount + 1,
    //   invoiceItems: invoiceItems,
    //   rejectedItems: rejectedItems,
    //   acceptedItems: acceptedItems,
    // });
    setItemCount(itemCount + 1);
  };

  const handleNewInventoryItem = async () => {
    console.log('inventory data: ', invoiceItemReviewData[itemCount]);
    setLoading(true);
    setCreated(false);
    setMatched(false);
    setCreatedInventoryItem({});
    setSelectedItem(null);
    let data = invoiceItemReviewData[itemCount];
    let res = null;
    console.log('Creating inventory item...');
    try {
      const response = await client.graphql({
        query: createInventoryItem,
        variables: {
          input: {
            name: data['name'],
            totalQuantity: parseInt(data['acceptedQuantity']),
            totalWeight:
              parseFloat(data['unitWeight']) *
              parseInt(data['acceptedQuantity']),
            unitWeight: parseFloat(data['unitWeight']),
            unitMeasurement: data['unitMeasurement'],
            unitAveragePrice: parseFloat(data['pricePerUnit']),
            groups: [userPoolId.toString()],
            minQuantity: data['minQuantity'],
          },
        },
      });
      console.log('Response: ', response);
      if (response) {
        Alert.alert('Inventory Item Created');
        res = response['data']['createInventoryItem'];
        setCreatedInventoryItem(res);
        setInventoryItemsAfterUpdate(prevItems => [...prevItems, res]);
      }
    } catch (error) {
      console.log('Error: ', error);
      Alert.alert('Error: Please try again');
    } finally {
      setCreated(true);
      setLoading(false);
    }
    console.log('created inventory item: ', createdInventoryItem);
  };

  const handleUpdateInventoryItem = async (inventoryItem, data) => {
    console.log('Updating inventory item...', inventoryItem);
    console.log('Inventory Item Data: ', data);

    const existingItem = inventoryItem;
    data['totalWeight'] =
      parseFloat(data['unitWeight']) * parseInt(data['acceptedQuantity']);
    console.log('data w', data['unitWeight']);
    console.log('data q', data['acceptedQuantity']);
    // Calculate new total quantity
    const newTotalQuantity =
      parseInt(existingItem['totalQuantity']) +
      parseInt(data['acceptedQuantity']);
    console.log('New Total Quantity: ', newTotalQuantity);
    console.log('Existing Item q: ', existingItem['totalQuantity']);
    console.log('Data q: ', data['acceptedQuantity']);
    const newTotalWeight =
      parseFloat(existingItem['totalWeight']) + parseFloat(data['totalWeight']);
    console.log('New Total Weight: ', newTotalWeight);
    console.log('Existing Item w: ', existingItem['totalWeight']);
    console.log('Data w: ', data['totalWeight']);
    // Calculate the new average price
    const existingTotalCost =
      parseFloat(existingItem.unitAveragePrice) *
      parseInt(existingItem.totalQuantity);
    console.log('Existing Total Cost: ', existingTotalCost);
    console.log('Existing Item Price: ', existingItem.unitAveragePrice);
    console.log('Existing Item Quantity: ', existingItem.totalQuantity);
    const newTotalCost =
      parseFloat(data['pricePerUnit']) * parseInt(data['acceptedQuantity']);
    const combinedTotalCost = existingTotalCost + newTotalCost;
    const newAveragePrice = combinedTotalCost / newTotalQuantity;
    console.log('New Average Price: ', newAveragePrice);
    console.log('Combined Total Cost: ', combinedTotalCost);

    try {
      const response = await client.graphql({
        query: updateInventoryItem,
        variables: {
          input: {
            id: existingItem.id,
            name: data.name,
            totalQuantity: newTotalQuantity,
            totalWeight: newTotalWeight,
            unitAveragePrice: newAveragePrice.toFixed(2),
            minQuantity: existingItem.minQuantity
              ? existingItem.minQuantity
              : parseInt(data['minQuantity']),
          },
        },
      });
      console.log('Response: ', response);
      if (response) {
        Alert.alert('Inventory Item Updated');
        const updatedInventoryItem = response.data.updateInventoryItem;
        setInventoryItems(prevItems =>
          prevItems.map(item =>
            item.id === updatedInventoryItem.id ? updatedInventoryItem : item,
          ),
        );
        setInventoryItemsAfterUpdate(prevItems => [
          ...prevItems,
          updatedInventoryItem,
        ]);
      }
    } catch (error) {
      console.log('Error: ', error);
      Alert.alert('Error updating inventory item. Please try again.');
    }
  };

  const linkInvoiceItemInventoryItem = async (inventoryItem, invoiceItem) => {
    // needs to be updated with Inventory Item ID, acceptedQuantity, expiryDate, accepted, rejectionReason
    console.log('Updating invoice item...');
    console.log('Inventory Item in Link: ', inventoryItem);
    console.log('Invoice Item in Link: ', invoiceItem);
    try {
      const response = await client.graphql({
        query: updateInvoiceItem,
        variables: {
          input: {
            id: invoiceItem['id'],
            inventoryItemId: inventoryItem['id'],
          },
        },
      });
      console.log('Response: ', response);
      if (response) {
        updateInvoiceItems(response.data.updateInvoiceItem);
        setSavedInvoiceItems(prevItems =>
          prevItems.map((item, index) =>
            index === itemCount ? response.data.updateInvoiceItem : item,
          ),
        );
      }
    } catch (error) {
      throw new Error('Error linking invoice item to inventory item');
    }
  };

  const handleConfirm = async () => {
    try {
      setConfirming(true);
      if (rejected) {
        setComplete(true);
        setItemCount(itemCount + 1);
        setConfirming(false);
        return;
      }
      if (!selectedItem && !rejected) {
        try {
          if (!itemLinked) {
            await linkInvoiceItemInventoryItem(
              createdInventoryItem,
              invoiceItems[itemCount],
            );
            setItemLinked(true);
          }
          setComplete(true);
          setItemCount(itemCount + 1);
        } catch (error) {
          console.log('Error: ', error);
          Alert.alert(
            'Error Connecting Inventory Item & Invoice Item: Please try again',
          );
          return;
        }
      }
      if (selectedItem && !created) {
        try {
          if (!itemUpdated) {
            await handleUpdateInventoryItem(
              selectedItem,
              invoiceItems[itemCount],
            );
            setItemUpdated(true);
          }
        } catch (error) {
          console.log('Error: ', error);
          Alert.alert('Error Updating Inventory Item: Please try again');
          return;
        }
        try {
          if (!itemLinked) {
            await linkInvoiceItemInventoryItem(
              selectedItem,
              invoiceItems[itemCount],
            );
            setItemLinked(true);
          }
          setComplete(true);
          setItemCount(itemCount + 1);
        } catch (error) {
          console.log('Error: ', error);
          Alert.alert(
            'Error Connecting Inventory Item & Invoice Item: Please try again',
          );
          return;
        }
      }
    } catch (error) {
      console.log('Error: ', error);
      Alert.alert('Error Confirming Item: Please try again');
    } finally {
      setConfirming(false);
      setReviewed(false);
      setRejected(false);
    }
  };

  // List of inventory items

  const Item = ({item, backgroundColor, textColor}) => (
    <View style={styles.item} key={item['id']}>
      <Text style={{fontSize: 15, color: '#fff', alignSelf: 'center'}}>
        {item['name']}
      </Text>
      <Text style={{fontSize: 10, alignSelf: 'center', color: '#fff'}}>
        Total Quantity:
        {selectedItem == item
          ? parseInt(item['totalQuantity']) +
            parseInt(invoiceItems[itemCount]['acceptedQuantity']) +
            ' units'
          : item['totalQuantity'] + ' units'}
      </Text>
      <Text style={{fontSize: 10, alignSelf: 'center', color: '#fff'}}>
        Unit Weight: {item['unitWeight']}
      </Text>
      <Text style={{fontSize: 10, alignSelf: 'center', color: '#fff'}}>
        Unit Measurement: {item['unitMeasurement']}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {selectedItem !== item && (
          <Pressable
            onPress={() => {
              setSelectedItem(item);
            }}
            style={{
              backgroundColor: '#b0e298',
              marginTop: 20,
              width: 100,
              alignItems: 'center',
              padding: 10,
              borderRadius: 30,
            }}>
            <Text style={{color: '#2b2d42', fontWeight: 'bold'}}>SELECT</Text>
          </Pressable>
        )}
        {selectedItem == item && (
          <Pressable
            onPress={() => setSelectedItem(null)}
            inline
            style={{
              backgroundColor: '#8D99AE',
              marginTop: 20,
              width: 100,
              alignItems: 'center',
              padding: 10,
              borderRadius: 30,
            }}>
            <Text style={{color: '#2b2d42', fontWeight: 'bold'}}>REMOVE</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
  // Conditional rendering of selected inventory item
  const renderItem = ({item}) => {
    const backgroundColor = item === selectedItem ? '#fff' : '#f1f1f1';
    const color = '#2b2d42';

    return (
      <Item item={item} backgroundColor={backgroundColor} textColor={color} />
    );
  };

  console.log('current item: ', invoiceItem);
  console.log('current item count: ', itemCount);
  console.log('current invoice review data: ', invoiceItemReviewData);
  console.log('current inventory after update: ', inventoryItemsAfterUpdate);
  console.log('all current saved invoice items: ', savedInvoiceItems);
  console.log('correct saved invoice items: ', invoiceItems);

  return (
    <Modal visible={visible}>
      <View
        style={{
          height: Dimensions.get('window').height,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Pressable
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              margin: 10,
            }}>
            <MIcon
              name="close"
              size={20}
              style={{alignSelf: 'flex-start'}}
              onPress={() => {
                setItemCount(0);
                setItemReviewed(false);
                setReviewed(false);
                setAccepted(true);
                setRejected(false);
                setComplete(false);
                setVisible();
              }}
            />
            <Text>Close</Text>
          </Pressable>
          {complete && (
            <Pressable
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                margin: 10,
                disabled: complete ? true : false,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  display: selectedItem || created ? 'flex' : 'none',
                }}>
                Next
              </Text>
              <MIcon
                name="arrow-forward-ios"
                style={{
                  alignSelf: 'center',
                  display: selectedItem || created ? 'flex' : 'none',
                }}
                size={19}
                onPress={onPressNext}
              />
            </Pressable>
          )}
        </View>
        <ScrollView>
          {confirming ? (
            <View
              style={{
                height: 200,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator
                size="large"
                color="#f56042"
                style={{alignSelf: 'center'}}
              />
            </View>
          ) : itemCount == invoiceItems.length ? (
            <View>
              <InvoiceItemComplete />
            </View>
          ) : (
            <View>
              <View
                style={{
                  margin: 10,
                  marginRight: 20,
                  marginLeft: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: 'bold'}}>
                  INVOICE ITEM #{itemCount + 1}
                </Text>
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderColor: '#b8b8b8',
                  backgroundColor: '#fff',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '95%',
                    alignSelf: 'flex-end',
                    borderBottomWidth: 1,
                    borderColor: '#b8b8b8',
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      alignContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text>Item Name</Text>
                  </View>
                  <Controller
                    control={control}
                    name="name"
                    render={({
                      field: {onChange, onBlur, value},
                      fieldState: {error},
                    }) => (
                      <>
                        <TextInput
                          onBlur={onBlur}
                          onChangeText={value => onChange(value)}
                          value={value}
                        />
                        {error && <Text>{error.message}</Text>}
                      </>
                    )}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '95%',
                    alignSelf: 'flex-end',
                    borderBottomWidth: 1,
                    borderColor: '#b8b8b8',
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      alignContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text>Quantity</Text>
                  </View>
                  <Controller
                    control={control}
                    name="totalQuantity"
                    render={({
                      field: {onChange, onBlur, value},
                      fieldState: {error},
                    }) => (
                      <>
                        <TextInput
                          onBlur={onBlur}
                          onChangeText={value => onChange(value)}
                          value={value}
                        />
                        {error && <Text>{error.message}</Text>}
                      </>
                    )}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '95%',
                    alignSelf: 'flex-end',
                    borderBottomWidth: 1,
                    borderColor: '#b8b8b8',
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      alignContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text>Item Weight</Text>
                  </View>
                  <Controller
                    control={control}
                    name="unitWeight"
                    render={({
                      field: {onChange, onBlur, value},
                      fieldState: {error},
                    }) => (
                      <>
                        <TextInput
                          onBlur={onBlur}
                          onChangeText={value => onChange(value)}
                          value={value}
                        />
                        {error && <Text>{error.message}</Text>}
                      </>
                    )}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '95%',
                    alignSelf: 'flex-end',
                    borderBottomWidth: 1,
                    borderColor: '#b8b8b8',
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      alignContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text>Units</Text>
                  </View>
                  <Controller
                    control={control}
                    name="unitMeasurement"
                    style={{color: '#2b2d42'}}
                    render={({
                      field: {onChange, onBlur, value},
                      fieldState: {error},
                    }) => (
                      <>
                        <RNPickerSelect
                          onValueChange={value => onChange(value)}
                          placeholder={{
                            label: 'Select item units...',
                            value: null,
                            color: '#b8b8b8',
                          }}
                          value={value}
                          items={[
                            {label: 'grams', value: 'grams', color: '#2b2d42'},
                            {
                              label: 'kilograms',
                              value: 'kilograms',
                              color: '#2b2d42',
                            },
                            {
                              label: 'litres',
                              value: 'litres',
                              color: '#2b2d42',
                            },
                            {
                              label: 'millilitres',
                              value: 'millilitres',
                              color: '#2b2d42',
                            },
                            {label: 'units', value: 'units', color: '#2b2d42'},
                          ]}
                          fixAndroidTouchableBug={true}
                          useNativeAndroidPickerStyle={false}
                          style={pickerStyle}
                          Icon={() => {
                            return (
                              <MIcon
                                name="arrow-drop-down"
                                size={24}
                                color="#2b2d42"
                                style={{
                                  marginTop: 12,
                                  marginRight: 10,
                                }}
                              />
                            );
                          }}
                        />
                        {error && <Text>{error.message}</Text>}
                      </>
                    )}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '95%',
                    alignSelf: 'flex-end',
                    borderBottomWidth: 1,
                    borderColor: '#b8b8b8',
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      alignContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text>Item Price Per Unit</Text>
                  </View>
                  <Controller
                    control={control}
                    name="pricePerUnit"
                    render={({
                      field: {onChange, onBlur, value},
                      fieldState: {error},
                    }) => (
                      <>
                        <TextInput
                          onBlur={onBlur}
                          onChangeText={value => onChange(value)}
                          value={value}
                        />
                        {error && <Text>{error.message}</Text>}
                      </>
                    )}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '95%',
                    alignSelf: 'flex-end',
                    borderBottomWidth: 1,
                    borderColor: '#b8b8b8',
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      alignContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text>Expiry Date</Text>
                  </View>
                  <Controller
                    control={control}
                    render={({
                      field: {onChange, onBlur, value},
                      fieldState: {error},
                    }) => (
                      <>
                        <TextInput
                          onBlur={onBlur}
                          onChangeText={value => onChange(expiryDate)}
                          // value={typeof date === 'string' ? date : date.format('LL')}
                          value={expiryDate.toDateString()}
                          errorMessage={error?.message}
                          onFocus={() => {
                            showDatepicker();
                          }}
                          style={{color: '#2B2D42'}}
                        />
                        {error && <Text>{error.message}</Text>}
                      </>
                    )}
                    name="expiryDate"
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '95%',
                    alignSelf: 'flex-end',
                    borderBottomWidth: 1,
                    borderColor: '#b8b8b8',
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      alignContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text>Minimum Stock Quantity</Text>
                  </View>
                  <Controller
                    control={control}
                    name="minQuantity"
                    render={({
                      field: {onChange, onBlur, value},
                      fieldState: {error},
                    }) => (
                      <>
                        <TextInput
                          onBlur={onBlur}
                          onChangeText={value => onChange(value)}
                          value={value}
                        />
                        {error && <Text>{error.message}</Text>}
                      </>
                    )}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '95%',
                    paddingTop: 10,
                    paddingBottom: 10,
                    alignSelf: 'flex-end',
                    borderBottomWidth: 1,
                    borderColor: '#b8b8b8',
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      alignContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text>Accept Whole Item Delivery</Text>
                  </View>
                  <Controller
                    control={control}
                    name="accepted"
                    render={({
                      field: {onChange, onBlur, value},
                      fieldState: {error},
                    }) => (
                      <Switch
                        onBlur={onBlur}
                        onValueChange={value => {
                          onChange(value);
                          setAccepted(value);
                        }}
                        value={value}
                        errorMessage={error?.message}
                        defaultValue={true}
                        trackColor={{false: '#767577', true: '#f9a08e'}}
                        thumbColor={value ? '#f56042' : '#fff'}
                      />
                    )}
                  />
                </View>
                {!accepted && (
                  <>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '95%',
                        alignSelf: 'flex-end',
                        borderBottomWidth: 1,
                        borderColor: '#b8b8b8',
                      }}>
                      <View
                        style={{
                          alignItems: 'center',
                          alignContent: 'center',
                          alignSelf: 'center',
                        }}>
                        <Text>Reject Quantity</Text>
                      </View>
                      <Controller
                        control={control}
                        name="rejectedQuantity"
                        render={({
                          field: {onChange, onBlur, value},
                          fieldState: {error},
                        }) => (
                          <>
                            <TextInput
                              onBlur={onBlur}
                              onChangeText={value => onChange(value)}
                              value={value}
                              defaultValue="0"
                            />
                            {error && <Text>{error.message}</Text>}
                          </>
                        )}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '95%',
                        alignSelf: 'flex-end',
                        borderBottomWidth: 1,
                        borderColor: '#b8b8b8',
                      }}>
                      <View
                        style={{
                          alignItems: 'center',
                          alignContent: 'center',
                          alignSelf: 'center',
                        }}>
                        <Text>Reject Reason</Text>
                      </View>
                      <Controller
                        control={control}
                        name="rejectionReasons"
                        render={({
                          field: {onChange, onBlur, value},
                          fieldState: {error},
                        }) => (
                          <>
                            <TextInput
                              onBlur={onBlur}
                              onChangeText={value => onChange(value)}
                              value={value}
                              errorMessage={error?.message}
                              defaultValue=""
                            />
                            {error && <Text>{error.message}</Text>}
                          </>
                        )}
                      />
                    </View>
                  </>
                )}
              </View>
              <View
                style={{
                  borderColor: '#b8b8b8',
                }}>
                {!reviewed && (
                  <Pressable
                    onPress={handleSubmit(onSubmit)}
                    style={{
                      backgroundColor: loading ? '#b8b8b8' : '#6883ba',
                      padding: 10,
                      width: '30%',
                      alignSelf: 'center',
                      borderRadius: 30,
                      marginBottom: 20,
                      marginTop: 20,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        alignSelf: 'center',
                      }}>
                      Save
                    </Text>
                  </Pressable>
                )}
                {reviewed && !rejected && (
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '80%',
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                      alignSelf: 'center',
                    }}>
                    <Pressable
                      onPress={matchInventory}
                      style={{
                        backgroundColor: loading ? '#b8b8b8' : '#6883ba',
                        padding: 10,
                        margin: 20,
                        borderRadius: 30,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <MIcon
                        name="search"
                        size={12}
                        color="#fff"
                        fontWeight="bold"
                      />
                      <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        Inventory
                      </Text>
                    </Pressable>
                    <Text>OR</Text>
                    <Pressable
                      onPress={handleNewInventoryItem}
                      style={{
                        backgroundColor: loading ? '#b8b8b8' : '#6883ba',
                        padding: 10,
                        margin: 20,
                        borderRadius: 30,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <MIcon name="add" size={12} color="#fff" />
                      <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        Inventory Item
                      </Text>
                    </Pressable>
                  </View>
                )}

                {matchedItems.length > 0 && !loading && matched && (
                  <>
                    <View style={{marginLeft: 20}}>
                      <Text style={{fontWeight: 'bold'}}>
                        SELECT INVENTORY TO UPDATE
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: '#fff',
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        borderColor: '#b8b8b8',
                        paddingTop: 10,
                        paddingBottom: 10,
                      }}>
                      <FlatList
                        data={matchedItems}
                        renderItem={renderItem}
                        extraData={selectedItem}
                        horizontal
                        style={{
                          backgroundColor: '#fff',
                          marginTop: 10,
                          marginBottom: 10,
                        }}
                      />
                    </View>
                  </>
                )}
                {matchedItems.length == 0 && !loading && matched && (
                  <>
                    <View>
                      <Text>
                        No matches found, try again or create new inventory item
                      </Text>
                      <View
                        style={{
                          backgroundColor: '#fff',
                          borderTopWidth: 1,
                          borderBottomWidth: 1,
                          borderColor: '#b8b8b8',
                          paddingTop: 10,
                          paddingBottom: 10,
                        }}>
                        <FlatList
                          data={inventoryItems}
                          renderItem={renderItem}
                          extraData={selectedItem}
                          horizontal
                          style={{
                            backgroundColor: '#fff',
                            marginTop: 10,
                            marginBottom: 10,
                          }}
                        />
                      </View>
                    </View>
                  </>
                )}
                {loading && (
                  <View>
                    <ActivityIndicator
                      size="large"
                      color="#f56042"
                      style={{alignSelf: 'center'}}
                    />
                  </View>
                )}
              </View>
              {created && createdInventoryItem && (
                <View>
                  <View style={{marginLeft: 20}}>
                    <Text style={{fontWeight: 'bold'}}>
                      CREATED INVENTORY ITEM
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#fff',
                      borderTopWidth: 1,
                      borderColor: '#b8b8b8',
                      paddingTop: 40,
                      paddingBottom: 40,
                    }}>
                    <View
                      style={{
                        padding: 10,
                        backgroundColor: '#2b2d42',
                        borderRadius: 10,
                        marginVertical: 8,
                        marginHorizontal: 16,
                        width: '50%',
                        alignSelf: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#fff',
                          alignSelf: 'center',
                        }}>
                        {createdInventoryItem['name']}
                      </Text>
                      <Text
                        style={{
                          fontSize: 10,
                          alignSelf: 'center',
                          color: '#fff',
                        }}>
                        Total Quantity:{createdInventoryItem['totalQuantity']}{' '}
                        units
                      </Text>
                      <Text
                        style={{
                          fontSize: 10,
                          alignSelf: 'center',
                          color: '#fff',
                        }}>
                        Unit Weight:{' '}
                        {createdInventoryItem['unitWeight'] +
                          ' ' +
                          createdInventoryItem['unitMeasurement']}
                      </Text>
                      <Text
                        style={{
                          fontSize: 10,
                          alignSelf: 'center',
                          color: '#fff',
                        }}>
                        Average Cost: £
                        {parseFloat(createdInventoryItem['unitAveragePrice'])
                          .toFixed(2)
                          .toString()}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
              {(selectedItem || created || rejected) && (
                <View>
                  <Pressable
                    onPress={handleConfirm}
                    style={{
                      backgroundColor: '#b0e298',
                      width: '100%',
                      alignItems: 'center',
                      padding: 20,
                      alignSelf: 'center',
                      bottom: 0,
                    }}>
                    <Text style={{color: '#2b2d42', fontWeight: 'bold'}}>
                      CONFIRM
                    </Text>
                  </Pressable>
                </View>
              )}
            </View>
          )}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default InvoiceReviewItemModal;

const pickerStyle = StyleSheet.create({
  inputIOS: {},
  inputAndroid: {
    color: '#2b2d42',
    marginRight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    color: '#2b2d42',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    backgroundColor: '#2b2d42',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
});
