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
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon6 from 'react-native-vector-icons/FontAwesome6';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UsersScreen from './screens/Users/UsersScreen';
import HomeScreen from './screens/HomeScreen';
import SignOutButton from './components/SignOutButton';
import 'react-native-gesture-handler';
import UsersStack from './components/Stacks/UsersStack';
import InventoryStack from '../handle/components/Stacks/InventoryStack';
import {
  useCameraPermission,
  useMicrophonePermission,
} from 'react-native-vision-camera';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import InvoiceStack from './components/Stacks/InvoiceStack';
import OrderStack from './components/Stacks/OrderStack';
import WasteStack from './components/Stacks/WasteStack';
// retrieves only the current value of 'user' from 'useAuthenticator'
const userSelector = context => [context.user];

const initialFormState = {name: '', description: ''};
const client = generateClient();

const BottomTab = createBottomTabNavigator();

const App = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const {user, signOut} = useAuthenticator(userSelector);
  // const {hasPermission, requestPermission} = useMicrophonePermission();
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <FAIcon name="home" size={20} color="#000" />,
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#f56042'},
            headerTintColor: 'white',
            headerRight: () => (
              <Pressable onPress={signOut} style={{paddingRight: 10}}>
                <MIcon name="logout" size={20} color="#fff" />
              </Pressable>
            ),
          }}
        />
        <BottomTab.Screen
          name="Users"
          component={UsersStack}
          options={{
            tabBarIcon: () => <FAIcon name="users" size={20} color="#000" />,
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="Inventory"
          component={InventoryStack}
          options={{
            tabBarIcon: () => <MIcon name="inventory" size={20} color="#000" />,
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="Invoice"
          component={InvoiceStack}
          options={{
            tabBarIcon: () => (
              <FAIcon6 name="file-invoice" size={20} color="#000" />
            ),
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="Order"
          component={OrderStack}
          options={{
            tabBarIcon: () => <MIcon name="checklist" size={20} color="#000" />,
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="Waste"
          component={WasteStack}
          options={{
            tabBarIcon: () => <FAIcon name="recycle" size={20} color="#000" />,
            headerShown: false,
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
