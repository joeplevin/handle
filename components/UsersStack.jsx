import AddUserScreen from '../screens/Users/AddUserScreen';
import UsersScreen from '../screens/Users/UsersScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

const UsersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={UsersScreen} />
      <Stack.Screen name="AddUserScreen" component={AddUserScreen} />
    </Stack.Navigator>
  );
};

export default UsersStack;
