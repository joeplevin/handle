import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import AddUserScreen from './AddUserScreen';

const Stack = createStackNavigator();
const UsersScreen = ({navigation}) => {
  return (
    <View>
      <Text>UsersScreen</Text>
      <Button
        title="Add User"
        onPress={() =>
          navigation.navigate('AddUserScreen', {screen: 'AddUserScreen'})
        }
      />
    </View>
  );
};

export default UsersScreen;
