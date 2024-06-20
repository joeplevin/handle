import React, {useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import {listSuppliers} from '../src/graphql/queries';
import {createSupplier, updateSupplier} from '../src/graphql/mutations';
import {generateClient} from 'aws-amplify/api';
import {fetchAuthSession} from 'aws-amplify/auth';

import OpenAI from 'openai';
const client = generateClient();
const openai = new OpenAI({
  apiKey: 'sk-proj-IkqjrAAzp6Z01kQuXD1xT3BlbkFJH3DaiJlGfbwoTJBkjCgf',
});
const InvoiceReviewSupplier = ({
  supplier,
  supplierReview,
  visible,
  userPoolId,
}) => {
  const [reviewedSupplier, setReviewedSupplier] = useState(null);
  const [suppliersList, setSuppliersList] = useState([]);
  const [matchedSuppliers, setMatchedSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);
  const getSupplierMatch = async () => {
    console.log('Getting matches...');
    setLoading(true);

    const response = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Find the potential matches on the supplier names in this list ${JSON.stringify(
            suppliersList,
          )} with the name of this supplier ${JSON.stringify(
            supplier,
          )}. Return the matches as the original json objects.`,
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
    matches = JSON.parse(response.choices[0].message.content);
    matches.length > 0 ? setMatchedSuppliers(matches) : setMatchedSuppliers([]);
    console.log('Matched Suppliers: ', matchedSuppliers);
    setLoading(false);
    // const matches = JSON.parse(response.choices[0].message.content);
    // console.log('Matches: ', matches);
  };

  if (suppliersList.length > 0) {
  }
  // Get Suppliers
  useEffect(() => {
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
    const suppliersList = getSuppliers();
    // {"address": "undefined,Shields,undefined", "email": "info@delitrath.com", "name": "Delitrath", "phone": "(122) 456-7090"}
    console.log(userPoolId);
    // const newSupplier = async () => {
    //   try {
    //     const supplier = await client.graphql({
    //       query: createSupplier,
    //       variables: {
    //         input: {
    //           name: 'Delifresh',
    //           email: '',
    //           phone: '(123) 456-7890',
    //           address: '99 Starbeck Ave, North Shields, NE19 8HG',
    //           groups: [`${userPoolId.toString()}`],
    //         },
    //       },
    //     });
    //     console.log('supplier: ', supplier);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // newSupplier();
  }, []);
  // Match Supplier

  // Create/Update Supplier

  // Send Supplier to Review Screen

  console.log('supplier: ', supplier);
  if (typeof supplier['address'] === 'object' && supplier['address'] !== null) {
    supplier[
      'address'
    ] = `${supplier['address']['first_line']},${supplier['address']['city']},${supplier['address']['postcode']}`;
  }
  const {register, setValue, handleSubmit, control} = useForm({
    defaultValues: {
      name: supplier['name'],
      email: supplier['email'],
      phone: supplier['phone'],
      address: supplier['address'],
    },
  });

  const onSubmit = async data => {
    console.log('data ', data);
    supplierReview(data);
    setReviewedSupplier(data);
    try {
      await getSupplierMatch();
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  return (
    <View>
      <Text>Supplier Name</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            defaultValue={supplier['name']}
          />
        )}
        name="name"
      />
      <Text>Supplier Email</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            defaultValue={supplier['email']}
          />
        )}
        name="email"
      />
      <Text>Supplier Phone</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            defaultValue={supplier['phone']}
          />
        )}
        name="phone"
      />
      <Text>Supplier Address</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            multiline={true}
            defaultValue={supplier['address']}
          />
        )}
        name="address"
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      {loading && <Text>Loading...</Text>}
      {matchedSuppliers && matchedSuppliers.length > 0 && !loading && (
        <View>
          <Text>Matched Suppliers</Text>
          {matchedSuppliers &&
            matchedSuppliers.map(supplier => (
              <View>
                <Text>{supplier['name']}</Text>
                <Text>{supplier['email']}</Text>
                <Text>{supplier['phone']}</Text>
                <Text>{supplier['address']}</Text>
              </View>
            ))}
        </View>
      )}
    </View>
  );
};

export default InvoiceReviewSupplier;
