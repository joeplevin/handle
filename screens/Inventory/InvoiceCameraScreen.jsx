import React, {useState, useEffect, useRef} from 'react';
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
import {generateClient} from 'aws-amplify/api';
import {listInventoryItems} from '../../src/graphql/queries';
import {
  launchDocumentScannerAsync,
  ResultFormatOptions,
} from '@infinitered/react-native-mlkit-document-scanner';
import InvoiceReview from '../../components/Invoice/InvoiceReview';
import {useInvoice} from '../../context/InvoiceContext';

const client = generateClient();

const InvoiceCameraScreen = ({navigation}) => {
  // Convert scanned image promise to file type.
  const [scannedImage, setScannedImage] = useState(
    'file:///data/user/0/com.handle/cache/mlkit_docscan_ui_client/9334225746600.jpg',
  );
  const [loading, setLoading] = useState(false);
  const [parsed, setParsed] = useState(false);
  const [blob, setBlob] = useState(null);
  // const [invoiceName, setInvoiceName] = useState(null);

  // Extracted data converted to invoice sections
  // 1. Invoice Items to be sent to db as inventory or as rejected items

  // const [path, setPath] = useState(null);

  const {
    userPoolId,
    setUserPoolId,
    extractedData,
    setExtractedData,
    invoiceUrl,
    setInvoiceUrl,
    invoiceName,
    setInvoiceName,
    parseInvoiceItemData,
    setParseInvoiceItemData,
    parseInvoiceData,
    setParseInvoiceData,
    parseInvoiceSupplierData,
    setParseInvoiceSupplierData,
    inventoryItemsBeforeUpdate,
    setInventoryItemsBeforeUpdate,
  } = useInvoice();

  const testInvoice = {
    invoice_number: '0003',
    invoice_date: '1/4/2024',
    total_cost: 153.65,
  };
  const testItems = [
    {
      name: '400g Rega San Marzano Tomatoes Tinned',
      pricePerUnit: 2.5,
      totalQuantity: 10,
      unitWeight: '400',
      unitMeasurement: 'grams',
    },
    {
      name: '250g Fresh Heritage Tomatoes',
      pricePerUnit: 1.59,
      totalQuantity: 5,
      unitWeight: '250g',
      unitMeasurement: 'grams',
    },
    {
      name: '500g Carrots',
      pricePerUnit: 2,
      totalQuantity: 10,
      unitWeight: '500g',
      unitMeasurement: 'grams',
    },
    {
      name: '6 Pack Braeburn Apples',
      pricePerUnit: 3,
      totalQuantity: 7,
      unitWeight: 1,
      unitMeasurement: 'units',
    },
  ];
  const testSupplier = {
    name: 'Delitrath',
    email: 'info@delitrath.com',
    phone: '(122) 456-7090',
  };

  // const [parseInvoiceItemData, setParseInvoiceItemData] = useState();
  // 2. Invoice data to be processed as invoice details
  // const [parseInvoiceData, setParseInvoiceData] = useState();
  // 3. Supplier data to be processed as supplier details
  // const [parseInvoiceSupplierData, setParseInvoiceSupplierData] = useState();

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
    }

    // set invoice name to current datetime
    setInvoiceName(new Date().toISOString());
    console.log('Invoice Name: ', new Date().toISOString());
    const loadInventory = async () => {
      const loadedInventory = await getInventory();
      if (loadedInventory !== null) {
        setInventoryItemsBeforeUpdate(loadedInventory);
      }
    };
    loadInventory();
  }, []);

  console.log('UserPoolId on Camera screen: ', userPoolId);
  console.log('Supplier on Camera Screen: ', parseInvoiceSupplierData);
  console.log('Invoice Items on Camera Screen: ', parseInvoiceItemData);
  // Form setup

  const extractData = async fileName => {
    console.log('Extracting data...');
    const response = await Predictions.identify({
      text: {
        source: {
          key: `${userPoolId}/invoices/${fileName}`,
        },
        format: 'FORM',
      },
    })
      .then(response => {
        // if (response) {
        //   if (
        //     response['text']['fullText'] === '' ||
        //     response['text']['fullText'] === null
        //   ) {
        //     Alert.alert('No text found in image. Please try again.');
        //   }
        // }
        setExtractedData(response['text']['fullText']);
      })
      .catch(err => console.log({err}));
  };

  const uploadInvoice = async fileName => {
    // upload the scanned image to the server
    console.log('Uploading invoice...');
    try {
      console.log('fileName:', fileName);
      if (scannedImage !== null) {
        const response = await fetch(scannedImage);
        console.log('response', response);
        const responseBlob = await response.blob();
        setBlob(responseBlob);
        console.log('Scanned Image: ', scannedImage);
        const result = uploadData({
          key: `${userPoolId}/invoices/${fileName}`,
          data: responseBlob,
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
      }
      const linkToStorageFile = await getUrl({
        key: userPoolId + '/invoices/' + fileName,
        // Alternatively, path: ({identityId}) => `album/{identityId}/1.jpg`
        options: {
          validateObjectExistence: false, // defaults to false
          expiresIn: 900, // validity of the URL, in seconds. defaults to 900 (15 minutes) and maxes at 3600 (1 hour)
          useAccelerateEndpoint: false, // Whether to use accelerate endpoint.
        },
      });
      setInvoiceUrl(linkToStorageFile.url);
      console.log('signed URL: ', linkToStorageFile.url);
      console.log('URL expires at: ', linkToStorageFile.expiresAt);
    } catch (error) {
      console.log('Error : ', error);
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
    console.log('Invoice Data in parse: ', extractedData);

    try {
      if (extractedData !== '' && extractedData !== null) {
        const response = await openai.chat.completions.create({
          messages: [
            {
              role: 'system',
              content: `Parse this data if it is an invoice: ${extractedData['text']['fullText']}. The invoice data should be returned in JSON format & include the following objects: invoice, supplier & invoice_items. The invoice object should have the following fields if they exist: invoice_number, invoice_date & total_cost. The supplier object should contain name, email & phone fields. The address should contain first_line, city & postcode. Each invoice_item should contain name, units, unitWeight, unitMeasurement & pricePerUnit. Replace missing values with a string 'not found' & ensure all objects are named in lower case.`,
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
          return response.choices[0].message.content;
        } else {
          Alert.alert('An error occurred. Please try again.');
        }
      } else {
        setParseInvoiceItemData(testItems);
        setParseInvoiceSupplierData(testSupplier);
        setParseInvoiceData(testInvoice);
      }
      setParsed(true);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const onSubmit = async () => {
    setParsed(false);
    setLoading(true);
    const fileName =
      new Date().toISOString().split('.')[0].replace(/:/g, '-') + '.jpg';
    setInvoiceName(fileName);
    try {
      await uploadInvoice(fileName);
      console.log('Upload complete');
      await extractData(fileName);
      console.log('Extraction complete');
      await parseInvoice();
      console.log('Parsing complete');
      setLoading(false);
      setParseInvoiceItemData(testItems);
      setParseInvoiceSupplierData(testSupplier);
      setParseInvoiceData(testInvoice);
      console.log('Loading state set to false');
    } catch (error) {
      console.log('Error: ', error);
      Alert.alert('An error occurred. Please try again.');
    }
    console.log('inventoryItemsBeforeUpdate: ', inventoryItemsBeforeUpdate);
  };

  const getInventory = async () => {
    try {
      const inventory = await client.graphql({
        query: listInventoryItems,
      });
      if (inventory) {
        console.log(
          'Inventory Items: ',
          inventory['data']['listInventoryItems']['items'],
        );
        return inventory['data']['listInventoryItems']['items'];
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const onPressNext = () => {
  //   navigation.navigate('InvoiceReviewScreen', {
  //     invoiceItems: parseInvoiceItemData,
  //     invoice: parseInvoiceData,
  //     invoiceUrl: invoiceUrl,
  //     supplier: parseInvoiceSupplierData,
  //   });
  // };

  return (
    <>
      <View>
        {!scannedImage ? (
          <View style={{height: '100%', width: '100%'}} key={1}>
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
                  // !loading
                  setLoading(false);
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
        ) : (
          <View key={1}>
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
                onPress={async () => {
                  await onSubmit();
                }}
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
                  Save
                </Text>
              </Pressable>
            </View>
            <View style={{height: '100%', backgroundColor: '#fff'}}>
              <View
                style={{
                  height: '50%',
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
              {parsed && (
                <View>
                  <Text style={{alignSelf: 'center', marginTop: 20}}>
                    Invoice Details
                  </Text>
                  <InvoiceReview
                    invoiceItems={parseInvoiceItemData}
                    invoiceDetails={parseInvoiceData}
                    invoiceUrl={invoiceUrl}
                    invoiceSupplier={parseInvoiceSupplierData}
                    userPoolId={userPoolId}
                    key={1}
                  />
                </View>
              )}
              {loading && (
                <View style={{marginTop: 100}}>
                  <ActivityIndicator
                    size="large"
                    color="#f56042"
                    style={{alignSelf: 'center'}}
                  />
                </View>
              )}
            </View>
          </View>
        )}
      </View>
    </>
  );
};
export default InvoiceCameraScreen;
