import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button, Pressable, ActivityIndicator} from 'react-native';
import AddInventoryScreen from './AddInventoryScreen';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import InventoryButtonBlock from '../../components/InventoryButtonBlock';
import InventoryList from '../../components/Inventory/InventoryList';
import {listInventoryItems, listInvoiceItems} from '../../src/graphql/queries';
import {generateClient} from 'aws-amplify/api';
import {useEffect, useState} from 'react';

const client = generateClient();

const Stack = createStackNavigator();

const InventoryScreen = ({navigation}) => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [linkedItems, setLinkedItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getInventory = async () => {
    try {
      const inventory = await client.graphql({
        query: listInventoryItems,
      });
      if (inventory) {
        return inventory['data']['listInventoryItems']['items'];
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getInvoiceItems = async () => {
    try {
      const res = await client.graphql({
        query: listInvoiceItems,
      });
      if (res) {
        console.log(
          'InvoiceItems Items: ',
          res['data']['listInvoiceItems']['items'],
        );
        return res['data']['listInvoiceItems']['items'];
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Fetch both inventory and invoice items concurrently
        const [loadedInventory, loadedInvoiceItems] = await Promise.all([
          getInventory(),
          getInvoiceItems(),
        ]);

        // Ensure the fetched data is stored in the state
        if (loadedInventory !== null) {
          setInventoryItems(loadedInventory);
        }
        if (loadedInvoiceItems !== null) {
          setInvoiceItems(loadedInvoiceItems);
        }

        // Link inventory and invoice items once both are fetched
        const linkedItems = loadedInventory.map(item => {
          const linkedItem = {...item};
          linkedItem['invoiceItems'] = loadedInvoiceItems.filter(
            invoiceItem => invoiceItem['inventoryItemId'] === item['id'],
          );
          return linkedItem;
        });

        // Update the linked items in the state
        setLinkedItems(linkedItems);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);
  return (
    <>
      <View>
        <InventoryButtonBlock navigation={navigation} />
      </View>
      <View>
        {loading ? (
          <ActivityIndicator size="large" color="#f56042" />
        ) : (
          <>
            <View>
              <InventoryList inventory={linkedItems} />
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default InventoryScreen;
