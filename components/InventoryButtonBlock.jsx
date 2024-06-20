import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Text, Pressable} from 'react-native';

const InventoryButtonBlock = ({navigation}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate('AddInventoryScreen');
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MIcon
            name="add"
            size={25}
            color="#000"
            style={{
              margin: 10,
            }}
          />
          <Text>Create</Text>
        </Pressable>
      </View>
      <View>
        <Text style={{fontSize: 30}}>|</Text>
      </View>
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate('AddInventoryScreen');
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MIcon
            name="search"
            size={25}
            color="#000"
            style={{
              margin: 10,
            }}
          />
          <Text>Search</Text>
        </Pressable>
      </View>
      <View>
        <Text style={{fontSize: 30}}>|</Text>
      </View>
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate('InvoiceCameraScreen');
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MIcon
            name="document-scanner"
            size={25}
            color="#000"
            style={{
              margin: 10,
            }}
          />
          <Text>Scan</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default InventoryButtonBlock;
