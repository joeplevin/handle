import AddUserScreen from '../../screens/Users/AddUserScreen';
import UsersScreen from '../../screens/Users/UsersScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Button, Pressable} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome6';

const Stack = createStackNavigator();

const UsersStack = ({route, navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={UsersScreen}
        options={{
          title: 'Users',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#f56042'},
          headerTintColor: 'white',
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('AddUserScreen')}
              style={{paddingRight: 10}}>
              <FAIcon name="plus" size={20} color="#fff" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="AddUserScreen"
        component={AddUserScreen}
        options={{
          title: 'Add User',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#f56042'},
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
};

export default UsersStack;
