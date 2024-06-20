import {Modal, Pressable, Text, View, Button, StyleSheet} from 'react-native';
import InvoiceReviewSupplier from '../../components/InvoiceReviewSupplier';
import {useState, useEffect} from 'react';
import {fetchAuthSession} from 'aws-amplify/auth';

const InvoiceReviewScreen = ({route, navigation}) => {
  console.log('route: ', route.params['invoiceItems']);
  const invoiceItems = route.params['invoiceItems'];

  const invoice = route.params['invoice'];
  const [userPoolId, setUserPoolId] = useState(null);
  useEffect(() => {
    const userPool = async () => {
      const {tokens} = await fetchAuthSession();
      setUserPoolId(tokens.accessToken.payload['cognito:groups']);
    };
    userPool();
  }, []);
  console.log('UserPoolId: ', userPoolId);
  //Invoice Items
  const [acceptedItems, setAcceptedItems] = useState([]);
  const [rejectedItems, setRejectedItems] = useState([]);
  const itemCount = invoiceItems.length;

  const [modalCount, setModalCount] = useState(0);
  const [itemModalVisible, setItemModalVisible] = useState(false);

  //Supplier

  const [supplier, setSupplier] = useState(route.params['supplier']);
  const [supplierReviewed, setSupplierReviewed] = useState(false);
  const handleSupplierReview = supplier => {
    setSupplier(supplier);
    setSupplierReviewed(true);
    console.log('supplier after review: ', supplier);
  };
  const [supplierModalVisible, setSupplierModalVisible] = useState(false);

  const handleSupplierVisible = () => {
    setSupplierModalVisible(false);
    console.log('visible? : ', supplierModalVisible);
  };
  //Invoice
  const [invoiceModalVisible, setInvoiceModalVisible] = useState(false);

  return (
    <>
      <View>
        <Text>Review Invoice Details</Text>
        <Button
          onPress={() => {
            setItemModalVisible(true);
          }}
          title="Items"></Button>
        <Button
          onPress={() => {
            setSupplierModalVisible(true);
            console.log('button pressed', supplierModalVisible);
          }}
          title="Supplier"></Button>
        <Button
          onPress={() => {
            setInvoiceModalVisible(true);
          }}
          title="Invoice Details"></Button>
      </View>
      <View>
        <Modal
          visible={supplierModalVisible}
          transparent={true}
          style={{height: '80%'}}>
          <Pressable onPress={() => setSupplierModalVisible(false)}>
            <Text>Close</Text>
          </Pressable>
          <InvoiceReviewSupplier
            supplier={supplier}
            supplierReview={handleSupplierReview}
            visible={handleSupplierVisible}
            userPoolId={userPoolId}
          />
        </Modal>
      </View>
      <View>
        <Modal visible={itemModalVisible}>
          <Pressable onPress={() => setItemModalVisible(false)}>
            <Text>Close</Text>
          </Pressable>
          <View>
            <Text>
              {itemCount > modalCount
                ? invoiceItems[modalCount]['item_name']
                : ''}
            </Text>
            <Text>
              {itemCount > modalCount
                ? invoiceItems[modalCount]['quantity']
                : ''}
            </Text>
            <Text>
              {itemCount > modalCount ? invoiceItems[modalCount]['weight'] : ''}
            </Text>
            <Text>
              {itemCount > modalCount
                ? invoiceItems[modalCount]['price_per_unit']
                : ''}
            </Text>
            <Pressable
              onPress={() => {
                invoiceItems[modalCount]['accepted'] = true;
                acceptedItems.push(invoiceItems[modalCount]);
                console.log('accepted: ', acceptedItems);
                if (modalCount < itemCount) {
                  setModalCount(modalCount + 1);
                }
                if (modalCount == itemCount - 1) {
                  setItemModalVisible(false);
                }
              }}>
              <Text>Accept</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                invoiceItems[modalCount]['accepted'] = false;
                rejectedItems.push(invoiceItems[modalCount]);
                console.log('rejected: ', rejectedItems);
                if (modalCount < itemCount) {
                  setModalCount(modalCount + 1);
                }
                if (modalCount == itemCount - 1) {
                  setItemModalVisible(false);
                }
              }}>
              <Text>Reject</Text>
            </Pressable>
          </View>
        </Modal>
        <Modal visible={invoiceModalVisible}>
          <Pressable
            onPress={() => {
              setInvoiceModalVisible(false);
            }}>
            <Text>Close</Text>
          </Pressable>
        </Modal>
      </View>
    </>
  );
};

export default InvoiceReviewScreen;
