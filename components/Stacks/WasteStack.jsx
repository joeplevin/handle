import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import WasteScreen from '../../screens/Waste/WasteScreen';
import AddWasteScreen from '../../screens/Waste/AddWasteScreen';
import FAIcon from 'react-native-vector-icons/FontAwesome6';
import {Pressable} from 'react-native';

const Stack = createStackNavigator();

const WasteStack = ({route, navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={WasteScreen}
        options={{
          title: 'Waste',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#f56042'},
          headerTintColor: 'white',
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('AddWasteScreen')}
              style={{paddingRight: 10}}>
              <FAIcon name="plus" size={20} color="#fff" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="AddWasteScreen"
        component={AddWasteScreen}
        options={{
          title: 'Waste',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#f56042'},
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
};

export default WasteStack;
