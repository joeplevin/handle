import AddInventoryScreen from '../screens/Inventory/AddInventoryScreen';
import InventoryScreen from '../screens/Inventory/InventoryScreen';
import InvoiceCameraScreen from '../screens/Inventory/InvoiceCameraScreen';
import {createStackNavigator} from '@react-navigation/stack';
import InvoiceItemStack from './InvoiceItemStack';
import React, {createContext, useState} from 'react';
import InvoiceReviewItemScreen from '../screens/Inventory/InvoiceReviewItemScreen';
import InvoiceReviewScreen from '../screens/Inventory/InvoiceReviewScreen';
import InvoiceReviewSupplierScreen from '../screens/Inventory/InvoiceReviewSupplierScreen';
import InvoiceReviewDetailsScreen from '../screens/Inventory/InvoiceReviewDetailsScreen';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import InventoryButtonBlock from './InventoryButtonBlock';
import {InvoiceProvider} from '../context/InvoiceContext';
const Stack = createStackNavigator();

const InventoryStack = ({route, navigation}) => {
  const [invoiceItems, setInvoiceItems] = useState(null);
  const value = {invoiceItems, setInvoiceItems};
  return (
    <InvoiceProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={InventoryScreen}
          options={{
            title: 'Inventory',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#f56042'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="AddInventoryScreen"
          component={AddInventoryScreen}
          options={{
            title: 'Create Inventory Item',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#f56042'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="InvoiceCameraScreen"
          component={InvoiceCameraScreen}
          options={{
            title: 'Scan Invoice',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#f56042'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="InvoiceReviewScreen"
          component={InvoiceReviewScreen}
          options={{
            title: 'Review Invoice',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#f56042'},
            headerTintColor: 'white',
          }}
        />

        <Stack.Screen
          name="InvoiceReviewSupplierScreen"
          component={InvoiceReviewSupplierScreen}
          options={{
            title: 'Invoice Supplier',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#f56042'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="InvoiceReviewDetailsScreen"
          component={InvoiceReviewDetailsScreen}
          options={{
            title: 'Invoice Details',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#f56042'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="InvoiceReviewItemScreen"
          component={InvoiceReviewItemScreen}
          options={{
            title: 'Invoice Items',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#f56042'},
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </InvoiceProvider>
  );
};

export default InventoryStack;
