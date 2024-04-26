import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import AddUserScreen from './AddUserScreen';

const Stack = createStackNavigator();
const UsersScreen = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UsersScreen" component={UsersScreen} />
        <Stack.Screen name="AddUserScreen" component={AddUserScreen} />
      </Stack.Navigator>
      <View>
        <Text>UsersScreen</Text>
        <Button
          title="Add User"
          onPress={() => navigation.navigate('AddUserScreen')}
        />
      </View>
    </NavigationContainer>
  );
};

export default UsersScreen;
