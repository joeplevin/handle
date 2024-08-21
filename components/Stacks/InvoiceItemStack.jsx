import {createStackNavigator} from '@react-navigation/stack';
import InvoiceReviewItemScreen from '../../screens/Inventory/InvoiceReviewItemScreen';
const Stack = createStackNavigator();

const InvoiceItemStack = ({route, navigation}) => {
  const {invoiceItems} = route.params;
  console.log(invoiceItems);
  return (
    <Stack.Navigator invoiceItems={invoiceItems}>
      {invoiceItems &&
        invoiceItems.map(item => {
          return (
            <Stack.Screen
              key={item['item_name']}
              name={item['item_name']}
              component={InvoiceReviewItemScreen}
            />
          );
        })}
    </Stack.Navigator>
  );
};

export default InvoiceItemStack;
