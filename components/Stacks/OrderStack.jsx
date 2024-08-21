import AddOrderScreen from '../../screens/Order/AddOrderScreen';
import OrderScreen from '../../screens/Order/OrderScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Pressable} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome6';

const Stack = createStackNavigator();

const OrderStack = ({route, navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={OrderScreen}
        options={{
          title: 'Orders',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#f56042'},
          headerTintColor: 'white',
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('AddOrderScreen')}
              style={{paddingRight: 10}}>
              <FAIcon name="plus" size={20} color="#fff" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="AddOrderScreen"
        component={AddOrderScreen}
        options={{
          title: 'Add Order',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#f56042'},
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;
