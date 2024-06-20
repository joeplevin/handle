import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button, Pressable} from 'react-native';
import AddInventoryScreen from './AddInventoryScreen';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import InventoryButtonBlock from '../../components/InventoryButtonBlock';

const Stack = createStackNavigator();
const InventoryScreen = ({navigation}) => {
  return (
    <View>
      <InventoryButtonBlock navigation={navigation} />
    </View>
  );
};

export default InventoryScreen;
