import InvoiceScreen from '../../screens/Invoice/InvoiceScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

const InvoiceStack = ({route, navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={InvoiceScreen}
        options={{
          title: 'Invoices',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#f56042'},
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
};

export default InvoiceStack;
