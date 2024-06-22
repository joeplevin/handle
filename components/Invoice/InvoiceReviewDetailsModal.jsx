import {generateClient} from 'aws-amplify/api';
import {useState, useEffect} from 'react';
import {Alert, Modal, Pressable, Text} from 'react-native';
import {createInvoice, updateSupplier} from '../../src/graphql/mutations';
import {useForm, Controller} from 'react-hook-form';
import {View, TextInput, Button} from 'react-native';
import DateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import moment from 'moment';
import {getSupplier} from '../../src/graphql/queries';
import {useInvoice} from '../../amplify/context/InvoiceContext';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const client = generateClient();

const InvoiceReviewDetailsModal = ({
  visible,
  setVisible,
  detailsReviewed,
  setDetailsReviewed,
}) => {
  // Route Params Setup
  // const supplier = route.params['supplier'];
  const {
    parseInvoiceItemData,
    setParseInvoiceItemData,
    parseInvoiceData,
    setParseInvoiceData,
    parseInvoiceSupplierData,
    setParseInvoiceSupplierData,
    userPoolId,
    invoiceUrl,
    invoiceName,
  } = useInvoice();
  const [supplier, setSupplier] = useState(parseInvoiceSupplierData);
  const [invoice, setInvoice] = useState(parseInvoiceData);

  useEffect(() => {
    if (parseInvoiceSupplierData) {
      setSupplier(parseInvoiceSupplierData);
    }
  }, [parseInvoiceSupplierData]);

  console.log('supplier on review details: ', supplier);
  console.log('supplierID: ', supplier['id']);
  console.log('invoice date: ', invoice['invoice_date']);
  console.log('invoice date type: ', typeof invoice['invoice_date']);
  console.log(
    'invoice date parsed: ',
    moment(invoice['invoice_date'], 'DD-MM-YYYY').format('DD-MM-YYYY'),
  );
  const correctDate = moment(invoice['invoice_date'], 'DD-MM-YYYY');
  console.log('correct date: ', correctDate);
  const invoiceDate = new Date(correctDate);
  console.log('invoice date from moment: ', invoiceDate);
  console.log('Date from moment: ', invoiceDate);
  // console.log('invoice date parsed: ', invoiceDate);

  // Datepicker Setup
  // const [date, setDate] = useState(invoiceDate);
  const [date, setDate] = useState(invoiceDate);
  console.log('date on load: ', date);

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    console.log('current date: ', currentDate);
    newDate = new Date(moment(currentDate));
    setDate(newDate);
  };

  const showMode = currentMode => {
    DateTimePickerAndroid.open({
      mode: currentMode,
      value: date,
      onChange: onDateChange,
      is24Hour: false,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  console.log('invoice: ', invoice);

  const {handleSubmit, control} = useForm({
    defaultValues: {
      invoiceNumber: invoice['invoice_number'],
      date: invoice['invoice_date'],
      totalAmount: invoice['total_cost'].toString(),
    },
  });

  const newInvoice = async data => {
    console.log('data: ', data);
    const dateToSave = moment(date).add(1, 'days');
    console.log('date: ', dateToSave);

    try {
      const newInvoice = await client.graphql({
        query: createInvoice,
        variables: {
          input: {
            supplierId: supplier['id'],
            supplier: {},
            invoiceNumber: data['invoiceNumber'],
            date: dateToSave,
            totalAmount: parseFloat(data['totalAmount']),
            imageUrl: invoiceUrl,
            groups: userPoolId.toString(),
          },
        },
      });
      console.log('Invoice created: ', newInvoice);
      console.log(
        'Invoice group',
        newInvoice['data']['createInvoice']['groups'],
      );
      setParseInvoiceData(newInvoice['data']['createInvoice']);
      Alert.alert('Invoice created successfully');
      // navigation.navigate('InvoiceReviewScreen', {
      //   screen: 'InvoiceReviewScreen',
      //   supplier: supplier,
      //   invoice: newInvoice['data']['createInvoice'],
      //   invoiceUrl: invoice['invoiceUrl'],
      //   invoiceItems: route.params['invoiceItems'],
      //   invoiceDetails: true,
      //   selectedSupplier: route.params['selectedSupplier'],
      //   reviewedSupplier: route.params['reviewedSupplier'],
      // });

      // const updatedSupplier = await client.graphql({
      //   query: updateSupplier,
      //   variables: {
      //     input: {
      //       id: supplier['id'],
      //       invoices: {
      //         items: {
      //           id: newInvoice['data']['createInvoice']['id'],
      //           invoiceNumber:
      //             newInvoice['data']['createInvoice']['invoiceNumber'],
      //           date: newInvoice['data']['createInvoice']['date'],
      //           totalAmount: newInvoice['data']['createInvoice']['totalAmount'],
      //           imageUrl: newInvoice['data']['createInvoice']['imageUrl'],
      //           groups: newInvoice['data']['createInvoice']['groups'],
      //         },
      //       },
      //     },
      //   },
      // });
      setDetailsReviewed(true);
      setVisible(false);
    } catch (err) {
      console.log('Error updating supplier: ', err);
      Alert.alert('Error updating supplier');
    }
  };

  return (
    <Modal visible={visible}>
      <MIcon name="close" size={20} onPress={setVisible} />

      <View style={{marginBottom: 5, marginLeft: 20}}>
        <Text style={{fontWeight: 'bold'}}>INVOICE DETAILS</Text>
      </View>
      <View
        style={{
          marginBottom: 20,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: '#b8b8b8',
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
            alignSelf: 'flex-end',
            borderBottomWidth: 1,
            borderColor: '#b8b8b8',
          }}>
          <View
            style={{
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
            }}>
            <Text>Invoice Number</Text>
          </View>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                style={{color: '#2B2D42'}}
              />
            )}
            name="invoiceNumber"
            rules={{required: true}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
            alignSelf: 'flex-end',
            borderBottomWidth: 1,
            borderColor: '#b8b8b8',
          }}>
          <View
            style={{
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
            }}>
            <Text>Date</Text>
          </View>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={value => onChange(date)}
                // value={typeof date === 'string' ? date : date.format('LL')}
                value={date.toDateString()}
                onFocus={() => {
                  showDatepicker();
                }}
                style={{color: '#2B2D42'}}
              />
            )}
            name="date"
            rules={{required: true}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
            alignSelf: 'flex-end',
          }}>
          <View
            style={{
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
            }}>
            <Text>Total Amount</Text>
          </View>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                style={{color: '#2B2D42'}}
              />
            )}
            name="totalAmount"
            rules={{required: true}}
          />
        </View>
        <Pressable
          onPress={handleSubmit(newInvoice)}
          style={{
            backgroundColor: '#2B2D42',
            padding: 10,
            width: '50%',
            alignSelf: 'center',
            borderRadius: 30,
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            CONTINUE
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default InvoiceReviewDetailsModal;
