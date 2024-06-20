import React from 'react';
import {Text, View, Button} from 'react-native';

const AddInventoryScreen = ({navigation}) => {
  return (
    <View>
      <Text>Inventory Screen</Text>
      <Button
        title="Add Inventory"
        onPress={() =>
          navigation.navigate('InvoiceCameraScreen', {
            screen: 'InvoiceCameraScreen',
          })
        }
      />
    </View>
  );
};

export default AddInventoryScreen;
