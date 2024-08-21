import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import {useInvoice} from '../../context/InvoiceContext';
import {ListItem} from '@rneui/themed';
import FAIcon6 from 'react-native-vector-icons/FontAwesome6';

const InvoiceItemComplete = () => {
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

  // console.log('current item: ', invoiceItem);
  // console.log('current item count: ', itemCount);
  console.log('current invoice review data: ', invoiceItemReviewData);
  console.log('current inventory after update: ', inventoryItemsAfterUpdate);
  console.log('all current saved invoice items: ', savedInvoiceItems);
  const [expandedAccepted, setExpandedAccepted] = useState([]);
  // console.log('correct saved invoice items: ', invoiceItems);
  useEffect(() => {
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
  }, []);
  const getInventoryItemBefore = inventoryItemId => {
    return inventoryItemsBeforeUpdate.find(item => item.id === inventoryItemId);
  };

  const getInventoryItemAfter = inventoryItemId => {
    return inventoryItemsAfterUpdate.find(item => item.id === inventoryItemId);
  };

  const renderAccordionContent = item => {
    const inventoryItemBefore = getInventoryItemBefore(item.inventoryItemId);
    const inventoryItemAfter = getInventoryItemAfter(item.inventoryItemId);

    if (!inventoryItemBefore || !inventoryItemAfter) return null;

    return (
      <View>
        <View>
          <Text style={{alignSelf: 'center', paddingTop: 5}}>
            Inventory Updated
          </Text>
        </View>
        <View
          style={{
            padding: 15,
            borderRadius: 8,
            marginVertical: 5,
            flexDirection: 'row',
            backgroundColor: '#ffffff',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              alignItems: 'center',
              padding: 10,
              borderRadius: 8,
              maxWidth: '40%',
              backgroundColor: '#d3d3d3',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 14,
                color: '#2b2d42',
                textAlign: 'center',
              }}>
              {inventoryItemBefore.name}
            </Text>
            <Text style={{fontSize: 12, color: '#2b2d42'}}>
              Quantity: {inventoryItemBefore.totalQuantity}
            </Text>
            <Text style={{fontSize: 12, color: '#2b2d42'}}>
              Price: {inventoryItemBefore.unitAveragePrice}
            </Text>
          </View>

          <View style={{paddingHorizontal: 10}}>
            <FAIcon6 name="chevron-right" size={20} color="#000" />
          </View>

          <View
            style={{
              alignItems: 'center',
              padding: 10,
              borderRadius: 8,
              maxWidth: '40%',
              backgroundColor: '#d3d3d3',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 14,
                color: '#2b2d42',
                textAlign: 'center',
              }}>
              {inventoryItemAfter.name}
            </Text>
            <Text style={{fontSize: 12, color: '#2b2d42'}}>
              Quantity: {inventoryItemAfter.totalQuantity}
            </Text>
            <Text style={{fontSize: 12, color: '#2b2d42'}}>
              Price: {inventoryItemAfter.unitAveragePrice}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: 'bold',
          color: '#2b2d42',
          marginTop: 30,
          alignSelf: 'center',
        }}>
        Accepted Items
      </Text>
      <View style={{width: '100%', marginVertical: 10}}>
        {savedInvoiceItems
          .filter(item => item.accepted)
          .map((item, index) => (
            <ListItem.Accordion
              key={index}
              bottomDivider
              content={
                <ListItem.Content>
                  <ListItem.Title
                    style={{
                      fontSize: 14,
                      fontWeight: '500',
                      color: '#2b2d42',
                    }}>
                    {item.name}
                  </ListItem.Title>
                </ListItem.Content>
              }
              isExpanded={expandedAccepted.includes(item['id'])}
              onPress={() => {
                if (expandedAccepted.includes(item['id'])) {
                  setExpandedAccepted(
                    expandedAccepted.filter(id => id !== item['id']),
                  );
                } else {
                  setExpandedAccepted([...expandedAccepted, item['id']]);
                }
              }}>
              {renderAccordionContent(item)}
            </ListItem.Accordion>
          ))}
      </View>

      <Text
        style={{
          fontSize: 14,
          fontWeight: 'bold',
          color: '#2b2d42',
          marginTop: 30,
          alignSelf: 'center',
        }}>
        Rejected Items
      </Text>
      <View style={{width: '100%', marginVertical: 10}}>
        {savedInvoiceItems
          .filter(item => !item.accepted)
          .map((item, index) => (
            <ListItem key={index} bottomDivider>
              <ListItem.Content>
                <ListItem.Title
                  style={{
                    fontSize: 14,
                    color: '#2b2d42',
                  }}>
                  {item.name}
                </ListItem.Title>
                <ListItem.Subtitle style={{fontSize: 10}}>
                  {item.rejectedQuantity
                    ? item.rejectedQuantity
                    : parseInt(item.totalQuantity) -
                      parseInt(item.acceptedQuantity) +
                      ' X ' +
                      item.unitWeight +
                      ' ' +
                      item.unitMeasurement +
                      ' - ' +
                      item.rejectionReasons}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
      </View>

      <Pressable
        style={{
          marginTop: 40,
          backgroundColor: '#6883ba',
          paddingVertical: 15,
          paddingHorizontal: 30,
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          // Handle button press
        }}>
        <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>
          Next
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default InvoiceItemComplete;
