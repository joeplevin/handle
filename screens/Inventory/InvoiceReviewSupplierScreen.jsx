import React, {useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Alert,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {listSuppliers} from '../../src/graphql/queries';
import {createSupplier, updateSupplier} from '../../src/graphql/mutations';
import {generateClient} from 'aws-amplify/api';
import {fetchAuthSession} from 'aws-amplify/auth';
import OpenAI from 'openai';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const client = generateClient();
const openai = new OpenAI({
  apiKey: 'sk-proj-IkqjrAAzp6Z01kQuXD1xT3BlbkFJH3DaiJlGfbwoTJBkjCgf',
});
const InvoiceReviewSupplierScreen = ({navigation, route}) => {
  //Get Supplier from route, passed from InvoiceReviewScreen
  const supplier = route.params['supplier'];
  // Sanitise address object
  const sanitiseSupplierAddress = s => {
    if (typeof s['address'] === 'object' && s['address'] !== null) {
      s[
        'address'
      ] = `${s['address']['first_line']},${s['address']['city']},${s['address']['postcode']}`;
    }
  };
  sanitiseSupplierAddress(supplier);
  console.log('route params: ', route.params);
  // Get User Pool Group from route
  const group = route.params['userPoolId'];
  const [poolGroup, setPoolGroup] = useState(null);
  // Supplier state for reviewed parsed supplier - prompt user to correct openai errors
  const [reviewedSupplier, setReviewedSupplier] = useState(null);

  // Suppliers list controlled by auth, only displays suppliers in this tenant
  const [suppliersList, setSuppliersList] = useState([]);
  console.log('suppliersList: ', suppliersList);
  // State for suppliers which match the reviewed supplier through openai call
  const [matchedSuppliers, setMatchedSuppliers] = useState([]);

  // Loading state for matching call
  const [loading, setLoading] = useState(false);

  // Selected matching supplier to pass back to review screen
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  console.log('selectedSupplier: ', selectedSupplier);
  // New supplier created state
  const [supplierCreated, setSupplierCreated] = useState(false);

  // GET SUPPLIERS

  const getSuppliers = async () => {
    try {
      const suppliers = await client.graphql({
        query: listSuppliers,
      });
      if (suppliers) {
        setSuppliersList(suppliers['data']['listSuppliers']['items']);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //Once, on page load. (No dependency in useEffect)
  useEffect(() => {
    getSuppliers();
    setPoolGroup(group.toString());
  }, []);

  // MATCH SUPPLIER
  // OpenAi call to match reviewed supplier details to list of tenant's suppliers
  const getSupplierMatch = async data => {
    // Loading...
    setLoading(true);
    console.log('reviewedSupplier in function: ', reviewedSupplier);
    console.log('data in function: ', data);

    //Get any updated suppliers

    // Matching call
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Find the potential matches on the supplier names in this list ${JSON.stringify(
            suppliersList,
          )} with the name of this supplier ${JSON.stringify(
            data,
          )}. Return the matches as the original json objects. If no matches found, return a string 'no matches found'.`,
        },
      ],
      model: 'gpt-3.5-turbo',
      temperature: 1,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    // Sanity check on response
    if (response.choices[0].message.content.typeof === 'string') {
      Alert.alert('No matches found', 'No matches found for this supplier.');
    } else {
      // Parse response - if matches exist, set state
      const matches = JSON.parse(response.choices[0].message.content);
      matches.length > 0
        ? setMatchedSuppliers(matches)
        : setMatchedSuppliers([]);
    }
    // Display results
    setLoading(false);
  };
  // CREATE SUPPLIER
  // Setting initial supplier details to pass back to review screen before adding relations (invoice details, catalog items etc)
  const handleNewSupplier = async data => {
    try {
      const newSupplier = await client.graphql({
        query: createSupplier,
        variables: {
          input: {
            name: data['name'],
            email: data['email'],
            phone: data['phone'],
            address: data['address'],
            groups: [`${poolGroup.toString()}`],
          },
        },
      });
      console.log('supplier: ', newSupplier);
      Alert.alert(
        'Supplier Created',
        'Supplier has been created successfully! Click continue to review invoice details.',
      );
      setReviewedSupplier(newSupplier);
      setSupplierCreated(true);
    } catch (error) {
      console.log(error);
    }
  };

  // Send Supplier to Review Screen

  // Form Setup
  const {handleSubmit, control} = useForm({
    defaultValues: {
      name: supplier['name'],
      email: supplier['email'],
      phone: supplier['phone'],
      address: supplier['address'],
    },
  });

  //Set reviewed supplier with form data
  const onSubmit = async data => {
    console.log('data: ', data);
    await getSupplierMatch(data);
  };

  // Flatlist Item
  const Item = ({item, backgroundColor, textColor}) => (
    <View style={styles.item} key={item['id']}>
      <Text style={{fontSize: 15, color: '#fff', alignSelf: 'center'}}>
        {item['name']}
      </Text>
      <Text style={{fontSize: 10, alignSelf: 'center', color: '#fff'}}>
        {item['email']}
      </Text>
      <Text style={{fontSize: 10, alignSelf: 'center', color: '#fff'}}>
        {item['phone']}
      </Text>
      <Text style={{fontSize: 10, alignSelf: 'center', color: '#fff'}}>
        {item['address']}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {selectedSupplier !== item && (
          <Pressable
            onPress={() => setSelectedSupplier(item)}
            style={{
              backgroundColor: '#b0e298',
              marginTop: 20,
              width: 100,
              alignItems: 'center',
              padding: 10,
              borderRadius: 30,
            }}>
            <Text style={{color: '#2b2d42', fontWeight: 'bold'}}>SELECT</Text>
          </Pressable>
        )}
        {selectedSupplier == item && (
          <Pressable
            onPress={() => setSelectedSupplier(null)}
            inline
            style={{
              backgroundColor: '#8D99AE',
              marginTop: 20,
              width: 100,
              alignItems: 'center',
              padding: 10,
              borderRadius: 30,
            }}>
            <Text style={{color: '#2b2d42', fontWeight: 'bold'}}>REMOVE</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
  // Conditional rendering of selected supplier
  const renderItem = ({item}) => {
    const backgroundColor = item === selectedSupplier ? '#fff' : '#f1f1f1';
    const color = '#2b2d42';

    return (
      <Item item={item} backgroundColor={backgroundColor} textColor={color} />
    );
  };

  return (
    <>
      <View style={{marginTop: 20, marginBottom: 5, marginLeft: 20}}>
        <Text style={{fontWeight: 'bold'}}>SUPPLIER DETAILS</Text>
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
            <Text>Supplier Name</Text>
          </View>
          <View style={{justifyContent: 'space-between'}}>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  style={{padding: 5}}
                />
              )}
              name="name"
            />
          </View>
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
            <Text>Supplier Email</Text>
          </View>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                style={{padding: 5}}
              />
            )}
            name="email"
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
            <Text>Supplier Phone</Text>
          </View>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                style={{padding: 5}}
              />
            )}
            name="phone"
          />
        </View>
        <View
          style={{
            width: '95%',
            alignSelf: 'flex-end',
          }}>
          <View style={{paddingTop: 10, paddingBottom: 10}}>
            <Text>Supplier Address</Text>
          </View>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                multiline={true}
                numberOfLines={4}
                style={{
                  textAlignVertical: 'top',
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#b8b8b8',
                  marginRight: 20,
                  height: 100,
                }}
              />
            )}
            name="address"
          />
        </View>
        {!supplierCreated && (
          <View
            style={{
              flexDirection: 'row',
              width: '80%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Pressable
              onPress={handleSubmit(onSubmit)}
              style={{
                backgroundColor: loading ? '#b8b8b8' : '#6883ba',
                padding: 10,
                margin: 20,
                borderRadius: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MIcon name="search" size={12} color="#fff" fontWeight="bold" />
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Suppliers</Text>
            </Pressable>
            <Text>OR</Text>
            <Pressable
              onPress={handleSubmit(handleNewSupplier)}
              style={{
                backgroundColor: '#6883ba',
                padding: 10,
                margin: 20,
                borderRadius: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MIcon name="add" size={12} color="#fff" />
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Supplier</Text>
            </Pressable>
          </View>
        )}
      </View>
      <View>
        <View>
          {loading && (
            <ActivityIndicator
              size="large"
              color="#6883ba"
              style={{alignSelf: 'center'}}
            />
          )}
          {matchedSuppliers && matchedSuppliers.length > 0 && !loading && (
            <>
              <View style={{marginBottom: 5, marginLeft: 20}}>
                <Text style={{fontWeight: 'bold'}}>MATCHED SUPPLIERS</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: '#b8b8b8',
                }}>
                <FlatList
                  data={matchedSuppliers}
                  renderItem={renderItem}
                  extraData={selectedSupplier}
                  horizontal
                  style={{
                    backgroundColor: '#fff',
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                />
              </View>
            </>
          )}
        </View>
        {(selectedSupplier !== null || supplierCreated) && (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Pressable
              onPress={() => {
                console.log(
                  'reviewedSupplier before navigate: ',
                  reviewedSupplier,
                );
                console.log(
                  'selectedSupplier before navigate: ',
                  selectedSupplier,
                );
                navigation.navigate('InvoiceReviewScreen', {
                  screen: 'InvoiceReviewScreen',
                  selectedSupplier: selectedSupplier,
                  poolGroup: poolGroup,
                  invoiceItems: route.params['invoiceItems'],
                  invoice: route.params['invoice'],
                  reviewedSupplier: reviewedSupplier,
                });
              }}
              style={{
                backgroundColor: '#2B2D42',
                padding: 10,
                width: '50%',
                margin: 20,
                borderRadius: 30,
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
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    backgroundColor: '#2b2d42',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
});
export default InvoiceReviewSupplierScreen;
