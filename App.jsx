import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {generateClient} from 'aws-amplify/api';
import {createTodo} from './src/graphql/mutations';
import {listTodos} from './src/graphql/queries';
import {
  withAuthenticator,
  useAuthenticator,
} from '@aws-amplify/ui-react-native';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UsersScreen from './screens/UsersScreen';
import HomeScreen from './screens/HomeScreen';
import SignOutButton from './components/SignOutButton';
// retrieves only the current value of 'user' from 'useAuthenticator'
const userSelector = context => [context.user];

const initialFormState = {name: '', description: ''};
const client = generateClient();

const BottomTab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Icon name="home" size={20} color="#000" />,
          }}
        />
        <BottomTab.Screen
          name="Users"
          component={UsersScreen}
          options={{
            tabBarIcon: () => <Icon name="users" size={20} color="#000" />,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {width: 400, flex: 1, padding: 20, alignSelf: 'center'},
  todo: {marginBottom: 15},
  input: {
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: {fontSize: 20, fontWeight: 'bold'},
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 8,
  },
  buttonText: {color: 'white', padding: 16, fontSize: 18},
});
