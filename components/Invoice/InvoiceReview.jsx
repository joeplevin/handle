import {Modal, Pressable, Text, View, Button, StyleSheet} from 'react-native';
import InvoiceReviewSupplier from '../../components/InvoiceReviewSupplier';
import InvoiceReviewSupplierModal from '../Invoice/InvoiceReviewSupplierModal';
import InvoiceReviewDetailsModal from '../Invoice/InvoiceReviewDetailsModal';
import InvoiceReviewItemModal from '../Invoice/InvoiceReviewItemModal';
import {useState, useEffect} from 'react';
import {fetchAuthSession} from 'aws-amplify/auth';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {useInvoice} from '../../context/InvoiceContext';

const InvoiceReview = ({reviewComplete, setReviewComplete}) => {
  const {
    parseInvoiceItemData,
    parseInvoiceData,
    parseInvoiceSupplierData,
    userPoolId,
  } = useInvoice();
  // Supplier state
  const [supplier, setSupplier] = useState();
  console.log('supplier on review: ', parseInvoiceSupplierData);

  useEffect(() => {
    if (parseInvoiceSupplierData) {
      setSupplier(parseInvoiceSupplierData);
    }
  }, [parseInvoiceSupplierData]);

  console.log('supplier on review invoice: ', supplier);

  //Invoice Items
  const [acceptedItems, setAcceptedItems] = useState();
  const [rejectedItems, setRejectedItems] = useState();
  const [items, setItems] = useState();

  //Invoice
  const [details, setDetails] = useState();
  const [url, setUrl] = useState();
  if (parseInvoiceItemData) {
    const itemCount = parseInvoiceItemData.length;
  }
  //Modals
  const [supplierModalVisible, setSupplierModalVisible] = useState(false);
  const [supplierReviewed, setSupplierReviewed] = useState(true);

  const [detailsModalVisible, setdetailsModalVisible] = useState(false);
  const [detailsReviewed, setDetailsReviewed] = useState(true);

  const [itemModalVisible, setItemModalVisible] = useState(false);
  const [itemReviewed, setItemReviewed] = useState(false);
  console.log('review complete: ', reviewComplete);
  console.log('item reviewed: ', itemReviewed);
  const handleSupplierVisible = () => {
    setSupplierModalVisible(false);
    console.log('visible? : ', supplierModalVisible);
  };

  const handleDetailsVisible = () => {
    setdetailsModalVisible(false);
    console.log('visible? : ', detailsModalVisible);
  };

  const handleItemVisible = () => {
    setItemModalVisible(false);
    console.log('visible? : ', itemModalVisible);
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
            width: supplierReviewed ? '90%' : '95%',
            alignSelf: 'flex-end',
            borderBottomWidth: 1,
            borderColor: '#b8b8b8',
            padding: 10,
          }}>
          <Pressable
            style={{flexDirection: 'row'}}
            onPress={() => {
              // navigation.navigate('InvoiceReviewSupplierScreen', {
              //   screen: 'InvoiceReviewSupplierScreen',
              //   supplier: supplier,
              //   userPoolId: userPoolId,
              //   invoiceItems: invoiceItems,
              //   invoice: invoice,
              // });
              setSupplierModalVisible(true);
            }}
            disabled={supplierReviewed ? true : false}>
            <MIcon
              name="business"
              size={20}
              color={supplierReviewed ? '#b8b8b8' : '#2b2d42'}
            />
            <Text
              style={{
                marginLeft: 20,
                width: '80%',
                color: supplierReviewed ? '#b8b8b8' : '#2b2d42',
              }}>
              Supplier
            </Text>
            {supplierReviewed ? (
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
            width: supplierReviewed && !detailsReviewed ? '95%' : '90%',
            alignSelf: 'flex-end',
            padding: 10,
          }}>
          <Pressable
            style={{
              flexDirection: 'row',
            }}
            onPress={() => {
              // navigation.navigate('InvoiceReviewDetailsScreen', {
              //   screen: 'InvoiceReviewDetailsScreen',
              //   invoice: invoice,
              //   userPoolId: userPoolId,
              //   supplier: supplier,
              //   invoiceItems: invoiceItems,
              //   selectedSupplier: route.params['selectedSupplier'],
              //   reviewedSupplier: route.params['reviewedSupplier'],
              // });
              setdetailsModalVisible(true);
            }}
            disabled={supplierReviewed && !detailsReviewed ? false : true}>
            <MIcon
              name="assignment"
              size={20}
              color={
                supplierReviewed && !detailsReviewed ? '#2b2d42' : '#b8b8b8'
              }
            />
            <Text
              style={{
                marginLeft: 20,
                width: '80%',
                color:
                  supplierReviewed && !detailsReviewed ? '#2b2d42' : '#b8b8b8',
              }}>
              Invoice Details
            </Text>
            {detailsReviewed ? (
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
            width:
              supplierReviewed && detailsReviewed && !itemReviewed
                ? '95%'
                : '90%',
            alignSelf: 'flex-end',
            backgroundColor: '#fff',
          }}>
          <Pressable
            style={{flexDirection: 'row'}}
            onPress={() => {
              // navigation.navigate('InvoiceReviewItemScreen', {
              //   screen: 'InvoiceReviewItemScreen',
              //   invoiceItems: invoiceItems,
              //   supplier: supplier,
              //   invoice: invoice,
              //   itemCount: 0,
              //   acceptedItems: acceptedItems ? acceptedItems : [],
              //   rejectedItems: rejectedItems ? rejectedItems : [],
              //   userPoolId: userPoolId,
              // });
              setItemModalVisible(true);
            }}
            disabled={
              supplierReviewed && detailsReviewed && !itemReviewed
                ? false
                : true
            }>
            <MIcon
              name="fastfood"
              size={20}
              color={
                supplierReviewed && detailsReviewed && !itemReviewed
                  ? '#2b2d42'
                  : '#b8b8b8'
              }
            />
            <Text
              style={{
                marginLeft: 20,
                width: '80%',
                color:
                  supplierReviewed && detailsReviewed && !itemReviewed
                    ? '#2b2d42'
                    : '#b8b8b8',
              }}>
              Items
            </Text>
            {itemReviewed ? (
              <MIcon name="check" size={20} color="#b0e298" />
            ) : (
              <MIcon name="arrow-forward-ios" size={20} />
            )}
          </Pressable>
        </View>
        <InvoiceReviewSupplierModal
          visible={supplierModalVisible}
          setVisible={handleSupplierVisible}
          supplierReviewed={supplierReviewed}
          setSupplierReviewed={setSupplierReviewed}
        />
        <InvoiceReviewDetailsModal
          visible={detailsModalVisible}
          setVisible={handleDetailsVisible}
          detailsReviewed={detailsReviewed}
          setDetailsReviewed={setDetailsReviewed}
        />
        <InvoiceReviewItemModal
          visible={itemModalVisible}
          setVisible={handleItemVisible}
          itemReviewed={itemReviewed}
          setItemReviewed={setItemReviewed}
        />
      </View>
    </>
  );
};

export default InvoiceReview;

//colours
// red/orange - f56042
// dark blue - 2b2d42
// light blue - 6883ba
// pink - f7e1d7
// greenish - b0e298
