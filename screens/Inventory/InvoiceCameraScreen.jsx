import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Button,
  Pressable,
  Text,
  ActivityIndicator,
} from 'react-native';
import DocumentScanner from 'react-native-document-scanner-plugin';
import {uploadData, getUrl} from 'aws-amplify/storage';
import {useForm, Controller} from 'react-hook-form';
import {fetchAuthSession} from 'aws-amplify/auth';
import {Predictions} from '@aws-amplify/predictions';
import 'react-native-get-random-values';
import {ReadableStream} from 'web-streams-polyfill';
import {parseInvoice} from '../../api/Invoice';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Alert} from 'react-native';
import OpenAI from 'openai';
import {TextInput} from 'react-native-gesture-handler';
import {
  launchDocumentScannerAsync,
  ResultFormatOptions,
} from '@infinitered/react-native-mlkit-document-scanner';

const InvoiceCameraScreen = ({navigation}) => {
  // Convert scanned image promise to file type.
  const [scannedImage, setScannedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [userPoolId, setUserPoolId] = useState(null);
  const [invoiceData, setInvoiceData] = useState(true);
  const [invoiceUrl, setInvoiceUrl] = useState(null);
  const [parseClick, setParseClick] = useState(false);
  const [loading, setLoading] = useState(false);
  const [parsed, setParsed] = useState(true);
  const [blob, setBlob] = useState(null);

  const [parseInvoiceItemData, setParseInvoiceItemData] = useState([
    {
      item_name: '400g Rega San Marzano Tomatoes Tinned',
      price_per_unit: 2.5,
      quantity: 10,
      weight: '400g',
    },
    {
      item_name: '250g Fresh Heritage Tomatoes',
      price_per_unit: 1.59,
      quantity: 5,
      weight: '250g',
    },
    {
      item_name: '500g Carrots',
      price_per_unit: 2,
      quantity: 10,
      weight: '500g',
    },
    {
      item_name: '6 Pack Braeburn Apples',
      price_per_unit: 3,
      quantity: 7,
      weight: '',
    },
    {
      item_name: 'Sea Bass Fillet',
      price_per_unit: 1.5,
      quantity: 9,
      weight: '',
    },
    {
      item_name: '500g New Potatoes',
      price_per_unit: 3.5,
      quantity: 8,
      weight: '500g',
    },
    {
      item_name: '1kg Rousseau Potatoes',
      price_per_unit: 3.5,
      quantity: 12,
      weight: '1kg',
    },
    {
      item_name: 'Porneio',
      price_per_unit: 0.7,
      quantity: 1,
      weight: '',
    },
  ]);
  const [parseInvoiceData, setParseInvoiceData] = useState({
    invoice_number: '0003',
    invoice_date: '1/4/2024',
    total_cost: 153.65,
  });
  const [parseInvoiceSupplierData, setParseInvoiceSupplierData] = useState({
    name: 'Delitrath',
    email: 'info@delitrath.com',
    phone: '(122) 456-7090',
    address: {
      street: 'Started Ave',
      city: 'Shields',
      state: 'NE19.BNG',
    },
  });
  const [invoiceName, setInvoiceName] = useState(null);
  const [path, setPath] = useState(null);
  console.log('parsed invoice data: ', parseInvoiceData);
  console.log('image', scannedImage);

  const openai = new OpenAI({
    apiKey: 'sk-proj-IkqjrAAzp6Z01kQuXD1xT3BlbkFJH3DaiJlGfbwoTJBkjCgf',
  });

  //Add usergroup stuff to context/similar so that available to all screens
  useEffect(() => {
    const userPool = async () => {
      const {tokens} = await fetchAuthSession();
      setUserPoolId(tokens.accessToken.payload['cognito:groups'].toString());
    };
    userPool();
    if (userPoolId !== null) {
      setUserPoolId(userPoolId.toString());
      // setPath(userPoolId + '/' + fileName);
    }
    console.log('Path: ', path);
  }, []);
  console.log('UserPoolId on Camera screen: ', userPoolId);

  // Form setup

  const extractData = async () => {
    console.log('Extracting data...');
    const response = await Predictions.identify({
      text: {
        source: {
          key: `${userPoolId}/invoices/${invoiceName}`,
        },
        format: 'FORM',
      },
    })
      .then(response => {
        console.log(response['text']['fullText']);
        setInvoiceData(response);
      })
      .catch(err => console.log({err}));
  };

  const uploadInvoice = async () => {
    // upload the scanned image to the server
    console.log('Uploading invoice...');
    try {
      console.log('Scanned Image: ', scannedImage);
      if (scannedImage !== null) {
        const response = await fetch(scannedImage);
        console.log('response', response);
        const responseBlob = await response.blob();
        setBlob(responseBlob);
        setInvoiceName(new Date().toISOString());
        console.log('Scanned Image: ', scannedImage);
      }
    } catch (error) {
      console.log('Error: ', error);
    }
    try {
      console.log('Uploading invoice...', path);
      const result = uploadData({
        key: `${userPoolId}/invoices/${invoiceName}`,
        data: blob,
        options: {
          onProgress: ({transferredBytes, totalBytes}) => {
            if (totalBytes) {
              console.log(
                `Upload progress ${Math.round(
                  (transferredBytes / totalBytes) * 100,
                )} %`,
              );
            }
          },
        },
      }).result;
      console.log('Path from Response: ', result.key);
      console.log('actual response: ', result);
    } catch (error) {
      console.log('Upload error : ', error);
      Alert('Error uploading invoice');
    }
    try {
      const linkToStorageFile = await getUrl({
        key: 'invoices/' + userPoolId + '/' + invoiceName,
        // Alternatively, path: ({identityId}) => `album/{identityId}/1.jpg`
        options: {
          validateObjectExistence: false, // defaults to false
          expiresIn: 20, // validity of the URL, in seconds. defaults to 900 (15 minutes) and maxes at 3600 (1 hour)
          useAccelerateEndpoint: false, // Whether to use accelerate endpoint.
        },
      });
      setInvoiceUrl(linkToStorageFile.url);
      console.log('signed URL: ', linkToStorageFile.url);
      console.log('URL expires at: ', linkToStorageFile.expiresAt);
    } catch (error) {
      console.log('Error : ', error);
      Alert('Error uploading invoice');
    }
  };

  const scanDocument = async () => {
    // start the document scanner
    const {scannedImages} = await DocumentScanner.scanDocument();

    // get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImage(scannedImages[0]);
    }
  };
  const parseInvoice = async () => {
    console.log('Parsing invoice...');
    console.log('Invoice Data: ', invoiceData['text']['fullText']);
    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: `Parse this invoice data: ${invoiceData['text']['fullText']}. The invoice data should be returned in JSON format & include the following objects: invoice, supplier & invoice_items. The invoice object should have the following fields if they exist: invoice_number, invoice_date & total_cost. The supplier object should contain name, email, phone & address fields. The address should contain first_line, city & postcode. Each invoice_item should contain item_name, quantity, weight & price_per_unit. Replace missing values with a string 'not found' & ensure all objects are named in lower case.`,
          },
        ],
        model: 'gpt-3.5-turbo',
        temperature: 1,
        max_tokens: 4000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      console.log('Response: ', response.choices[0].message.content);
      const invoice = JSON.parse(response.choices[0].message.content);
      console.log('Invoice: ', invoice);
      if (
        invoice.hasOwnProperty('invoice_items') &&
        invoice.hasOwnProperty('invoice') &&
        invoice.hasOwnProperty('supplier')
      ) {
        setParseInvoiceItemData(invoice['invoice_items']);
        setParseInvoiceSupplierData(invoice['supplier']);
        setParseInvoiceData(invoice['invoice']);
        setParsed(true);
        return response.choices[0].message.content;
      } else {
        Alert('Please try again');
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const onSubmit = () => {
    setLoading(true);
    try {
      uploadInvoice();
      if (invoiceUrl === null) {
        throw new Error('Error uploading invoice');
      }
      extractData();
      if (!invoiceData) {
        throw new Error('Error extracting data');
      }
      parseInvoice();
      if (parseInvoiceData === null) {
        throw new Error('Error parsing invoice');
      }
    } catch (error) {
      new Alert('Error: Please try again');
    }
    setLoading(false);
    setUploaded(true);
  };

  const onPressNext = () => {
    navigation.navigate('InvoiceReviewScreen', {
      invoiceItems: parseInvoiceItemData,
      invoice: parseInvoiceData,
      invoiceUrl: invoiceUrl,
      supplier: parseInvoiceSupplierData,
    });
  };

  return (
    <>
      <View
      // style={{
      //   marginTop: 20,
      //   height: '95%',
      //   borderTopWidth: 1,
      //   borderBottomWidth: 1,
      //   borderColor: '#b8b8b8',
      //   backgroundColor: '#fff',
      // }}>
      >
        {!scannedImage && (
          <View style={{height: '100%', width: '100%'}}>
            <View
              style={{
                height: '100%',
                width: '100%',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: '20%',
              }}>
              <Image
                source={require('../../assets/File-Drawer.png')}
                style={{
                  height: 300,
                  width: 300,
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: 20,
                  color: '#2b2d42',
                }}>
                Stock updates made easy!
              </Text>
              <Text
                style={{
                  marginTop: 20,
                  textAlign: 'center',
                  width: '80%',
                  color: '#2b2d42',
                }}>
                Grab your latest delivery invoice & let us do the rest! We'll do
                the heavy lifting & update your stock levels for you.
              </Text>
              <Text style={{marginTop: 20, color: '#2b2d42'}}>
                Tap 'Go' to begin scanning
              </Text>
              <Pressable
                onPress={async () => {
                  // result will contain an object with the result information
                  const result = await launchDocumentScannerAsync({
                    pageLimit: 1,
                    galleryImportAllowed: true,
                    resultFormats: ResultFormatOptions.JPEG,
                  });
                  if (result) {
                    setScannedImage(result['pages'][0]);
                  }
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                  backgroundColor: '#6883ba',
                  justifyContent: 'center',
                  width: '20%',
                  height: 50,
                  borderRadius: 30,
                  marginTop: 40,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                  }}>
                  Go
                </Text>
              </Pressable>
            </View>
          </View>
        )}
        {scannedImage && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              paddingTop: 10,
              alignSelf: 'center',
              backgroundColor: '#fff',
            }}>
            <Pressable
              onPress={async () => {
                // result will contain an object with the result information
                const result = await launchDocumentScannerAsync({
                  pageLimit: 1,
                  galleryImportAllowed: true,
                  resultFormats: ResultFormatOptions.JPEG,
                });
                setScannedImage(result['pages'][0]);
              }}
              style={{
                justifyContent: 'center',
                width: '20%',
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: '#6883ba',
                }}>
                Retake
              </Text>
            </Pressable>
            <Pressable
              onPress={uploaded ? onPressNext : onSubmit}
              style={{
                justifyContent: 'center',
                width: '20%',
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: '#6883ba',
                  fontWeight: 'bold',
                }}>
                {uploaded ? 'Next' : 'Save'}
              </Text>
            </Pressable>
          </View>
        )}
        {scannedImage && (
          <View style={{height: '100%', backgroundColor: '#fff'}}>
            <View
              style={{
                height: '80%',
                width: '80%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Image
                resizeMode="contain"
                style={{
                  height: '100%',
                  width: '100%',
                  alignSelf: 'center',
                  marginTop: 20,
                }}
                source={{uri: scannedImage}}
              />
            </View>

            {/* {uploaded && (
              <View>
                <Pressable
                  onPress={() => {
                    onSubmit();
                  }}>
                  <Text>Continue</Text>
                </Pressable>
              </View>
            )} */}
          </View>
        )}
        {loading && (
          <View>
            <ActivityIndicator
              size="large"
              color="#f56042"
              style={{alignSelf: 'center'}}
            />
          </View>
        )}
      </View>
    </>
  );
};
export default InvoiceCameraScreen;
