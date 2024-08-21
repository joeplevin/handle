import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import AddOrderScreen from './AddOrderScreen';

const OrderScreen = ({navigation}) => {
  return (
    <View>
      <Text>Order Screen</Text>
      <Button
        title="Add User"
        onPress={() =>
          navigation.navigate('AddOrderScreen', {screen: 'AddOrderScreen'})
        }
      />
    </View>
  );
};

export default OrderScreen;
