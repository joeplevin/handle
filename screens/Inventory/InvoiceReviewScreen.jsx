import {Modal, Pressable, Text, View, Button, StyleSheet} from 'react-native';
import InvoiceReviewSupplier from '../../components/InvoiceReviewSupplier';
import {useState, useEffect} from 'react';
import {fetchAuthSession} from 'aws-amplify/auth';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const InvoiceReviewScreen = ({route, navigation}) => {
  console.log('route: ', route.params);
  const invoiceItems = route.params['invoiceItems'];
  const invoice = route.params['invoice'];
  invoice['invoiceUrl'] = route.params['invoiceUrl'];

  let reviewedSupplier = {};
  let selectedSupplier = {};
  if (route.params['reviewedSupplier']) {
    reviewedSupplier =
      route.params['reviewedSupplier']['data']['createSupplier'];
    console.log('reviewed supplier on review screen,', supplier);
  }
  if (route.params['selectedSupplier']) {
    selectedSupplier = route.params['selectedSupplier'];
    console.log('selected supplier on review screen,', supplier);
  }

  console.log('reviewed Supplier: ', reviewedSupplier);
  console.log('selected Supplier: ', selectedSupplier);
  // Set up supplier from different routes

  const [supplier, setSupplier] = useState(route.params['supplier']);

  const [userPoolId, setUserPoolId] = useState(null);
  useEffect(() => {
    const userPool = async () => {
      const {tokens} = await fetchAuthSession();
      setUserPoolId(tokens.accessToken.payload['cognito:groups']);
    };
    userPool();
    setAcceptedItems(route.params['acceptedItems']);
    setRejectedItems(route.params['rejectedItems']);
    Object.keys(selectedSupplier).length > 0
      ? setSupplier(selectedSupplier)
      : Object.keys(reviewedSupplier).length > 0
      ? setSupplier(reviewedSupplier)
      : console.log('supplier on review screen: ', supplier);
  }, [supplier]);
  console.log('UserPoolId: ', userPoolId);
  //Invoice Items
  const [acceptedItems, setAcceptedItems] = useState(
    route.params['acceptedItems'],
  );
  const [rejectedItems, setRejectedItems] = useState(
    route.params['rejectedItems'],
  );

  const itemCount = invoiceItems.length;
  console.log('accepted items: ', acceptedItems);
  console.log('rejected items: ', rejectedItems);

  //Supplier

  console.log('supplier on review screen: ', supplier);

  const [supplierModalVisible, setSupplierModalVisible] = useState(false);

  const handleSupplierVisible = () => {
    setSupplierModalVisible(false);
    console.log('visible? : ', supplierModalVisible);
  };
  //Invoice

  return (
    <>
      <View
        style={{
          marginTop: 20,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: '#b8b8b8',
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            width:
              route.params['reviewedSupplier'] ||
              route.params['selectedSupplier']
                ? '90%'
                : '95%',
            alignSelf: 'flex-end',
            borderBottomWidth: 1,
            borderColor: '#b8b8b8',
            padding: 10,
          }}>
          <Pressable
            style={{flexDirection: 'row'}}
            onPress={() => {
              navigation.navigate('InvoiceReviewSupplierScreen', {
                screen: 'InvoiceReviewSupplierScreen',
                supplier: supplier,
                userPoolId: userPoolId,
                invoiceItems: invoiceItems,
                invoice: invoice,
              });
            }}
            disabled={route.params['invoiceDetails'] ? true : false}>
            <MIcon
              name="business"
              size={20}
              color={
                route.params['selectedSupplier'] ||
                route.params['reviewedSupplier']
                  ? '#b8b8b8'
                  : '#2b2d42'
              }
            />
            <Text
              style={{
                marginLeft: 20,
                width: '80%',
                color:
                  route.params['selectedSupplier'] ||
                  route.params['reviewedSupplier']
                    ? '#b8b8b8'
                    : '#2b2d42',
              }}>
              Supplier
            </Text>
            {route.params['reviewedSupplier'] ||
            route.params['selectedSupplier'] ? (
              <MIcon name="check" size={20} color="#b0e298" />
            ) : (
              <MIcon name="arrow-forward-ios" size={20} />
            )}
          </Pressable>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#b8b8b8',
            width:
              (route.params['selectedSupplier'] ||
                route.params['reviewedSupplier']) &&
              route.params['invoiceDetails']
                ? '90%'
                : (route.params['selectedSupplier'] ||
                    route.params['reviewedSupplier']) &&
                  !route.params['invoiceDetails']
                ? '95%'
                : '90%',
            alignSelf: 'flex-end',
            padding: 10,
          }}>
          <Pressable
            style={{
              flexDirection: 'row',
            }}
            onPress={() => {
              navigation.navigate('InvoiceReviewDetailsScreen', {
                screen: 'InvoiceReviewDetailsScreen',
                invoice: invoice,
                userPoolId: userPoolId,
                supplier: supplier,
                invoiceItems: invoiceItems,
                selectedSupplier: route.params['selectedSupplier'],
                reviewedSupplier: route.params['reviewedSupplier'],
              });
            }}
            disabled={
              (route.params['selectedSupplier'] ||
                route.params['reviewedSupplier']) &&
              !route.params['invoiceDetails']
                ? false
                : true
            }>
            <MIcon
              name="assignment"
              size={20}
              color={
                (route.params['selectedSupplier'] ||
                  route.params['reviewedSupplier']) &&
                route.params['invoiceDetails']
                  ? '#b8b8b8'
                  : route.params['selectedSupplier'] ||
                    (route.params['reviewedSupplier'] &&
                      !route.params['invoiceDetails'])
                  ? '#2b2d42'
                  : '#b8b8b8'
              }
            />
            <Text
              style={{
                marginLeft: 20,
                width: '80%',
                color:
                  (route.params['selectedSupplier'] ||
                    route.params['reviewedSupplier']) &&
                  route.params['invoiceDetails']
                    ? '#b8b8b8'
                    : route.params['selectedSupplier'] ||
                      (route.params['reviewedSupplier'] &&
                        !route.params['invoiceDetails'])
                    ? '#2b2d42'
                    : '#b8b8b8',
              }}>
              Invoice Details
            </Text>
            {route.params['invoiceDetails'] ? (
              <MIcon name="check" size={20} color="#b0e298" style={{}} />
            ) : (
              <MIcon name="arrow-forward-ios" size={20} />
            )}
          </Pressable>
        </View>
        <View
          style={{
            borderColor: '#b8b8b8',
            padding: 10,
            width: route.params['invoiceDetails'] ? '95%' : '90%',
            alignSelf: 'flex-end',
            backgroundColor: '#fff',
          }}>
          <Pressable
            style={{flexDirection: 'row'}}
            onPress={() => {
              navigation.navigate('InvoiceReviewItemScreen', {
                screen: 'InvoiceReviewItemScreen',
                invoiceItems: invoiceItems,
                supplier: supplier,
                invoice: invoice,
                itemCount: 0,
                acceptedItems: acceptedItems ? acceptedItems : [],
                rejectedItems: rejectedItems ? rejectedItems : [],
                userPoolId: userPoolId,
              });
            }}
            disabled={route.params['invoiceDetails'] ? false : true}>
            <MIcon
              name="fastfood"
              size={20}
              color={route.params['invoiceDetails'] ? '#2b2d42' : '#b8b8b8'}
            />
            <Text
              style={{
                marginLeft: 20,
                width: '80%',
                color: route.params['invoiceDetails'] ? '#2b2d42' : '#b8b8b8',
              }}>
              Items
            </Text>
            {route.params['acceptedItems'] || route.params['rejectedItems'] ? (
              <MIcon name="check" size={20} color="#b0e298" />
            ) : (
              <MIcon name="arrow-forward-ios" size={20} />
            )}
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default InvoiceReviewScreen;

//colours
// red/orange - f56042
// dark blue - 2b2d42
// light blue - 6883ba
// pink - f7e1d7
// greenish - b0e298
