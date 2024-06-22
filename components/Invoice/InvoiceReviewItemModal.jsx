import React, {useEffect} from 'react';
import {Alert, Modal, Pressable, Text, View} from 'react-native';
import {useState} from 'react';
import {useForm, Controller, set} from 'react-hook-form';
import {TextInput} from 'react-native-gesture-handler';
import {listInventoryItems} from '../../src/graphql/queries';
import {createInvoiceItem} from '../../src/graphql/mutations';
import {createInventoryItem} from '../../src/graphql/mutations';
import {updateInvoiceItem} from '../../src/graphql/mutations';
import {generateClient} from 'aws-amplify/api';
import OpenAI from 'openai';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const client = generateClient();
const openai = new OpenAI({
  apiKey: 'sk-proj-IkqjrAAzp6Z01kQuXD1xT3BlbkFJH3DaiJlGfbwoTJBkjCgf',
});

const InvoiceReviewItemModal = ({route, navigation}) => {
  // Initialise from route params
  const invoiceItems = route.params['invoiceItems'];
  const itemCount = route.params['itemCount'];
  const userPoolId = route.params['userPoolId'];
  const invoice = route.params['invoice'];

  let invoiceItem = invoiceItems[itemCount];
  console.log('Invoice Item: ', invoiceItem);

  // Set up state for accepted and rejected items
  const [invoiceItemData, setInvoiceItemData] = useState({});
  const [reviewed, setReviewed] = useState(false);
  const [accepted, setAccepted] = useState(false);

  // Set up state for inventory items
  const [inventoryItems, setInventoryItems] = useState([
    {
      name: 'Cherry Tomatoes Canned',
      weight: '400g',
      averagePrice: '£2.40',
      units: 18,
      minQuantity: 5,
    },
    {
      name: 'Heirloom Tomatoes',
      weight: '300g',
      averagePrice: '£1.60',
      units: 12,
      minQuantity: 6,
    },
    {
      name: 'Sliced Carrots',
      weight: '500g',
      averagePrice: '£2.10',
      units: 10,
      minQuantity: 5,
    },
    {
      name: 'Granny Smith Apples Pack of 6',
      weight: '600g',
      averagePrice: '£2.50',
      units: 5,
      minQuantity: 3,
    },
    {
      name: 'Mackerel Fillet',
      weight: '200g',
      averagePrice: '£1.80',
      units: 15,
      minQuantity: 4,
    },
    {
      name: 'Maris Piper Potatoes',
      weight: '500g',
      averagePrice: '£3.60',
      units: 8,
      minQuantity: 5,
    },
    {
      name: 'Yukon Gold Potatoes',
      weight: '1kg',
      averagePrice: '£3.40',
      units: 20,
      minQuantity: 8,
    },
    {
      name: 'Bosc Pears Pack of 4',
      weight: '500g',
      averagePrice: '£2.20',
      units: 7,
      minQuantity: 3,
    },
    {
      name: 'Red Onions',
      weight: '500g',
      averagePrice: '£1.75',
      units: 10,
      minQuantity: 4,
    },
    {
      name: 'Baby Spinach',
      weight: '250g',
      averagePrice: '£1.90',
      units: 15,
      minQuantity: 6,
    },
    {
      name: 'Butternut Squash',
      weight: '1kg',
      averagePrice: '£2.50',
      units: 9,
      minQuantity: 4,
    },
    {
      name: 'Cucumber',
      weight: '300g',
      averagePrice: '£0.99',
      units: 16,
      minQuantity: 5,
    },
    {
      name: 'Zucchini',
      weight: '500g',
      averagePrice: '£2.00',
      units: 12,
      minQuantity: 5,
    },
    {
      name: 'Bell Peppers',
      weight: '500g',
      averagePrice: '£2.80',
      units: 10,
      minQuantity: 5,
    },
    {
      name: 'Atlantic Salmon Fillet',
      weight: '300g',
      averagePrice: '£4.20',
      units: 6,
      minQuantity: 3,
    },
    {
      name: 'Cod Fillet',
      weight: '250g',
      averagePrice: '£3.50',
      units: 14,
      minQuantity: 4,
    },
    {
      name: 'Alaskan Pollock Fillet',
      weight: '300g',
      averagePrice: '£3.00',
      units: 20,
      minQuantity: 6,
    },
    {
      name: 'Organic Bananas Pack of 5',
      weight: '500g',
      averagePrice: '£1.20',
      units: 18,
      minQuantity: 5,
    },
    {
      name: 'Strawberries',
      weight: '250g',
      averagePrice: '£2.30',
      units: 10,
      minQuantity: 4,
    },
    {
      name: 'Blueberries',
      weight: '200g',
      averagePrice: '£1.80',
      units: 14,
      minQuantity: 5,
    },
    {
      name: 'Lemons Pack of 5',
      weight: '500g',
      averagePrice: '£1.50',
      units: 12,
      minQuantity: 5,
    },
    {
      name: 'Limes Pack of 5',
      weight: '500g',
      averagePrice: '£1.35',
      units: 15,
      minQuantity: 5,
    },
    {
      name: 'Asparagus',
      weight: '250g',
      averagePrice: '£2.25',
      units: 11,
      minQuantity: 4,
    },
    {
      name: 'Avocados Pack of 4',
      weight: '800g',
      averagePrice: '£3.00',
      units: 8,
      minQuantity: 3,
    },
    {
      name: 'Sweet Potatoes',
      weight: '1kg',
      averagePrice: '£2.80',
      units: 9,
      minQuantity: 4,
    },
    {
      name: 'Whole Chicken',
      weight: '1.5kg',
      averagePrice: '£5.00',
      units: 6,
      minQuantity: 2,
    },
    {
      name: 'Pork Loin',
      weight: '1kg',
      averagePrice: '£4.50',
      units: 7,
      minQuantity: 2,
    },
    {
      name: 'Beef Steaks',
      weight: '1kg',
      averagePrice: '£10.00',
      units: 5,
      minQuantity: 2,
    },
    {
      name: 'Lamb Chops',
      weight: '500g',
      averagePrice: '£7.50',
      units: 8,
      minQuantity: 3,
    },
    {
      name: 'Pork Sausages',
      weight: '1kg',
      averagePrice: '£3.75',
      units: 10,
      minQuantity: 5,
    },
    {
      name: 'Chicken Breasts',
      weight: '1kg',
      averagePrice: '£6.00',
      units: 9,
      minQuantity: 3,
    },
    {
      name: 'Salmon Steaks',
      weight: '1kg',
      averagePrice: '£12.00',
      units: 6,
      minQuantity: 2,
    },
    {
      name: 'Tuna Steaks',
      weight: '500g',
      averagePrice: '£7.00',
      units: 10,
      minQuantity: 4,
    },
    {
      name: 'King Prawns',
      weight: '500g',
      averagePrice: '£9.00',
      units: 8,
      minQuantity: 3,
    },
    {
      name: 'Scallops',
      weight: '300g',
      averagePrice: '£10.00',
      units: 6,
      minQuantity: 2,
    },
    {
      name: 'Mussels',
      weight: '1kg',
      averagePrice: '£4.50',
      units: 10,
      minQuantity: 4,
    },
    {
      name: 'Oysters',
      weight: '500g',
      averagePrice: '£12.00',
      units: 7,
      minQuantity: 3,
    },
    {
      name: 'Clams',
      weight: '500g',
      averagePrice: '£6.00',
      units: 8,
      minQuantity: 3,
    },
    {
      name: 'Squid',
      weight: '500g',
      averagePrice: '£5.00',
      units: 9,
      minQuantity: 4,
    },
    {
      name: 'Octopus',
      weight: '1kg',
      averagePrice: '£15.00',
      units: 5,
      minQuantity: 2,
    },
  ]);
  const [createdInventoryItem, setCreatedInventoryItem] = useState({});

  // Set up state for matched items
  const [loading, setLoading] = useState(false);
  const [matchedItems, setMatchedItems] = useState([]);

  // Set up state for created invoice item data
  const [createdInvoiceItem, setCreatedInvoiceItem] = useState({});

  // If all items are processed, set invoiceItem to empty
  if (itemCount == invoiceItems.length) {
    invoiceItem = {item_name: '', quantity: 0, weight: '', price_per_unit: 0};
  }
  const [acceptedItems, setAcceptedItems] = useState(
    route.params['acceptedItems'],
  );
  const [rejected, setRejected] = useState(false);
  const [rejectedItems, setRejectedItems] = useState(
    route.params['rejectedItems'],
  );
  const [complete, setComplete] = useState(false);

  //Set up form
  const {reset, handleSubmit, control} = useForm({
    defaultValues: {
      item_name: invoiceItem['item_name'],
      quantity: invoiceItem['quantity'].toString(),
      weight: invoiceItem['weight'],
      price_per_unit: invoiceItem['price_per_unit'].toString(),
    },
  });
  // Set up rejection form
  const {
    reset: rejectReset,
    handleSubmit: handleRejectSubmit,
    control: rejectControl,
  } = useForm({
    defaultValues: {
      rejection_reason: '',
      rejection_quantity: '',
    },
  });
  // Reset form when invoiceItem changes
  useEffect(() => {
    setReviewed(false);
    getInventory();
    if (itemCount < invoiceItems.length) {
      reset({
        item_name: invoiceItem['item_name'],
        quantity: invoiceItem['quantity'].toString(),
        weight: invoiceItem['weight'],
        price_per_unit: invoiceItem['price_per_unit'].toString(),
      });
      rejectReset({
        rejection_reason: '',
        rejection_quantity: '',
      });
    }
    console.log('accepted items: ', acceptedItems);
    console.log('rejected items: ', rejectedItems);
  }, [invoiceItem]);

  // Submit form

  const onSubmit = async data => {
    console.log('confirmed item data: ', data);
    setInvoiceItemData(data);
    try {
      await createNewInvoiceItem(data);
      console.log('created invoice item: ', createdInvoiceItem);
      console.log('invoice item data: ', invoiceItemData);
    } catch (error) {
      console.log('Error: ', error);
      Alert.alert('Error creating invoice item. Please try again.');
    }
    setReviewed(true);
  };

  // Match invoiceItem with Inventory

  // Get Inventory Items
  const getInventory = async () => {
    try {
      const inventory = await client.graphql({
        query: listInventoryItems,
      });
      if (inventory) {
        setInventoryItems(inventory['data']['listInventoryItems']['items']);
        console.log(
          'Inventory Items: ',
          inventory['data']['listInventoryItems']['items'],
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Match invoiceItem with Inventory
  const matchInventory = async () => {
    setLoading(true);
    console.log('Matching invoice item with inventory items...');
    console.log('inventory items: ', inventoryItems);
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Match this invoice item: ${
            invoiceItem['item_name']
          } with the inventory items: ${inventoryItems.map(
            item => item['item_name'],
          )}. If there is a match, return the inventory item. If there is no match, return a string 'not found'.`,
        },
      ],
      model: 'gpt-3.5-turbo',
      temperature: 1,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    console.log('Response: ', response.choices[0].message.content);
    if (response.choices[0].message.content.typeof === 'string') {
      Alert.alert('No match found');
    } else {
      const matches = JSON.parse(response.choices[0].message.content);
      matches.length > 0 ? setMatchedItems(matches[0]) : setMatchedItems([]);
      console.log('Matched Items: ', matchedItems);
    }
    setLoading(false);
  };

  // Accept item
  const onAccept = async data => {
    data['accepted'] = true;
    setAcceptedItems([...acceptedItems, data]);
    setInvoiceItemData(data);
    console.log('Invoice Item data after accept: ', invoiceItemData);
    console.log('Accepted items after accept: ', acceptedItems);
    setAccepted(true);
  };

  const onPressNext = () => {
    navigation.navigate('InvoiceReviewItemScreen', {
      itemCount: itemCount + 1,
      invoiceItems: invoiceItems,
      rejectedItems: rejectedItems,
      acceptedItems: acceptedItems,
    });
  };

  const createNewInvoiceItem = async data => {
    console.log('Creating invoice item...');
    console.log('Invoice Item Data: ', data);
    console.log('invoice: ', invoice);
    try {
      const newInvoiceItem = await client.graphql({
        query: createInvoiceItem,
        variables: {
          input: {
            invoiceId: invoice['id'],
            name: invoiceItemData['item_name'],
            totalQuantity: parseInt(data['quantity']),
            weight: parseFloat(data['weight']),
            pricePerUnit: parseFloat(data['price_per_unit']),
            groups: userPoolId.toString(),
            accepted: false,
          },
        },
      });
      console.log('Response: ', newInvoiceItem);
      if (newInvoiceItem) {
        setCreatedInvoiceItem(newInvoiceItem['data']['createInvoiceItem']);
        console.log('Created Invoice Item in function: ', createdInvoiceItem);

        Alert.alert('Invoice Item Created');
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const createNewInventoryItem = async (data, createdInvoiceItem) => {
    console.log('Creating inventory item...');
    console.log('Inventory Item Data: ', data);
    console.log('Created Invoice Item: ', createdInvoiceItem);
    try {
      const response = await client.graphql({
        query: createInventoryItem,
        variables: {
          input: {
            name: data['item_name'],
            weight: parseFloat(data['weight']),
            averagePrice: parseFloat(data['price_per_unit']),
            units: parseInt(data['quantity']),
            minQuantity: parseInt(data['min_quantity']),
            groups: [data['groups']],
          },
        },
      });
      console.log('Response: ', response);
      if (response) {
        setCreatedInventoryItem(response['data']['createInventoryItem']);
        Alert.alert('Inventory Item Created');
      }
    } catch (error) {
      console.log('Error: ', error);
      Alert.alert('Error: Please try again');
    }
  };

  const updateInventoryItem = async data => {
    console.log('Updating inventory item...');
    console.log('Inventory Item Data: ', data);
    try {
      const response = await client.graphql({
        query: updateInventoryItem,
        variables: {
          input: {
            id: data['id'],
            item_name: data['item_name'],
            weight: data['weight'],
            average_price: data['price_per_unit'],
            units: data['quantity'],
            min_quantity: 5,
          },
        },
      });
      console.log('Response: ', response);
      if (response) {
        Alert.alert('Inventory Item Updated');
      }
    } catch (error) {
      console.log('Error: ', error);
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
    } catch (error) {
      console.log('Error: ', error);
      Alert.alert('Error: Please try again');
    }
  };

  handleAddNewInventoryItem = async () => {
    console.log('invoice Item data: ', invoiceItemData);
    console.log('created invoice item: ', createdInvoiceItem);
    await createNewInventoryItem(invoiceItemData, createdInvoiceItem);
    console.log('created inventory item: ', createdInventoryItem);
    try {
      await linkInvoiceItemInventoryItem(
        createdInventoryItem,
        createdInvoiceItem,
      );
    } catch (error) {
      console.log('Error: ', error);
    }
    setComplete(true);
  };

  // Reject item

  const onReject = () => {
    setRejected(true);
  };

  const onRejectSubmit = async data => {
    // If all items are rejected, set invoiceItem to rejected
    if (
      parseInt(data['rejection_quantity']) ===
      parseInt(invoiceItemData['quantity'])
    ) {
      invoiceItemData['accepted'] = false;
      invoiceItemData['rejection_reason'] = data['rejection_reason'];
      setRejectedItems([...rejectedItems, invoiceItemData]);
      console.log(
        'All invoiceitem units rejected after submit: ',
        rejectedItems,
      );
      Alert.alert('Invoice Item Rejected');
    } else {
      // If only some items are rejected, split invoiceItem
      const newInvoiceItem = {...invoiceItemData};
      // Update quantity of original invoiceItem
      invoiceItemData['quantity'] =
        parseInt(invoiceItemData['quantity']) -
        parseInt(data['rejection_quantity']);
      invoiceItemData['accepted'] = true;
      setAcceptedItems([...acceptedItems, invoiceItemData]);
      console.log('Accepted items after submit: ', acceptedItems);
      // Create new invoiceItem for rejected items
      newInvoiceItem['accepted'] = false;
      newInvoiceItem['quantity'] = data['rejection_quantity'];
      newInvoiceItem['rejection_reason'] = data['rejection_reason'];
      setRejectedItems([...rejectedItems, newInvoiceItem]);
      console.log('Rejected items after submit: ', rejectedItems);
      Alert.alert(
        `Invoice Item Partially Rejected - ${data['rejection_quantity']} units of ${invoiceItem['item_name']} rejected & ${invoiceItem['quantity']} units accepted`,
      );
    }
    navigation.navigate('InvoiceReviewItemScreen', {
      itemCount: itemCount + 1,
      invoiceItems: invoiceItems,
      rejectedItems: rejectedItems,
      acceptedItems: acceptedItems,
    });
    setRejected(false);
  };

  return itemCount == invoiceItems.length ? (
    <View>
      <Text>End of Invoice</Text>
      <Pressable
        onPress={() => {
          console.log('Accepted Items on redirect: ', acceptedItems);
          console.log('Rejected Items on redirect: ', rejectedItems);
          navigation.navigate('InvoiceReviewScreen', {
            acceptedItems: acceptedItems,
            rejectedItems: rejectedItems,
            invoiceItems: invoiceItems,
          });
        }}>
        <Text>Review</Text>
      </Pressable>
    </View>
  ) : (
    <View>
      <View style={{marginBottom: 5, marginLeft: 20}}>
        <Text style={{fontWeight: 'bold'}}>INVOICE ITEM #{itemCount + 1}</Text>
      </View>
      <View
        style={{
          paddingBottom: 20,
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
            name="item_name"
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
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
            <Text>Item Quantity</Text>
          </View>
          <Controller
            control={control}
            name="quantity"
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
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
            name="weight"
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
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
            name="price_per_unit"
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
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
            <Text>Minimum Stock Quantity</Text>
          </View>
          <Controller
            control={control}
            name="min_quantity"
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                defaultValue="0"
              />
            )}
          />
        </View>
      </View>
      <View
        style={{
          marginBottom: 20,
          paddingBottom: 20,
          borderBottomWidth: 1,
          borderColor: '#b8b8b8',
          backgroundColor: '#fff',
        }}>
        {!reviewed && !rejected && !accepted && (
          <View>
            <Pressable
              onPress={handleSubmit(onSubmit)}
              style={{
                backgroundColor: '#6883ba',
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
                CONFIRM
              </Text>
            </Pressable>
          </View>
        )}
        {reviewed && !rejected && !accepted && (
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Pressable
              onPress={() => {
                onAccept(invoiceItemData);
              }}
              style={{
                backgroundColor: '#6883ba',
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
                ACCEPT
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setRejected(true);
              }}
              style={{
                backgroundColor: '#6883ba',
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
                REJECT
              </Text>
            </Pressable>
          </View>
        )}
        {rejected && !complete && (
          <View>
            <Text> Reject Item</Text>
            <Text>Rejection Reason</Text>
            <Controller
              control={rejectControl}
              name="rejection_reason"
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
            />
            <Text>Rejection Quantity</Text>
            <Controller
              control={rejectControl}
              name="rejection_quantity"
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
            />
            <Pressable onPress={handleRejectSubmit(onRejectSubmit)}>
              <Text>Reject</Text>
            </Pressable>
          </View>
        )}
        {accepted && !complete && (
          <View
            style={{
              flexDirection: 'row',
              width: '80%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Pressable
              onPress={() => {}}
              style={{
                backgroundColor: loading ? '#b8b8b8' : '#6883ba',
                padding: 10,
                paddingRight: 15,
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
                style={{fontWeight: 'bold'}}
              />
              <Text style={{color: '#fff', fontWeight: 'bold', marginLeft: 5}}>
                Inventory items
              </Text>
            </Pressable>
            <Text>OR</Text>
            <Pressable
              onPress={() => {
                handleAddNewInventoryItem();
              }}
              style={{
                backgroundColor: loading ? '#b8b8b8' : '#6883ba',
                padding: 10,
                paddingRight: 15,
                margin: 20,
                borderRadius: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MIcon
                name="add"
                size={12}
                color="#fff"
                style={{fontWeight: 'bold'}}
              />
              <Text style={{color: '#fff', fontWeight: 'bold', marginLeft: 5}}>
                Inventory item
              </Text>
            </Pressable>
          </View>
        )}
        {complete && (
          <Pressable
            onPress={onPressNext}
            style={{
              backgroundColor: '#6883ba',
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
              NEXT
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default InvoiceReviewItemModal;
