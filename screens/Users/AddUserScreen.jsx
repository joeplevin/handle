import React, {useEffect} from 'react';
import {TextInput, Pressable, Text, View} from 'react-native';
import {CreateUser} from '../amplify/backend/function/AdminQueries38793184/src/cognitoActions';
import {signUp} from 'aws-amplify/auth';
import {useState} from 'react';
import {fetchAuthSession, currentCredentials} from 'aws-amplify/auth';
import {Auth} from 'aws-amplify';
import {StyleSheet} from 'react-native';

const initialFormState = {username: '', email: '', password: ''};

const AddUserScreen = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [userPoolId, setUserPoolId] = useState(null);
  const [credentials, setCredentials] = useState(null);

  function setInput(key, value) {
    setFormState({...formState, [key]: value});
  }

  useEffect(() => {
    const userPool = async () => {
      const {tokens} = await fetchAuthSession();
      setUserPoolId(tokens.accessToken.payload['cognito:groups']);
    };
    userPool();
  }, []);
  console.log('UserPoolId: ', userPoolId);

  async function addUser() {
    console.log('email ' + formState.email);
    console.log('password ' + formState.password);
    console.log('userPoolId ' + userPoolId);
    // console.log('credentials' + credentials);
    try {
      if (!formState.email || !formState.password || !userPoolId) {
        console.log('missing user data');
        return;
      }
      const email = formState.email;
      const username = formState.email;
      const password = formState.password;
      const tenant = userPoolId.toString();
      const role = 'user';
      setFormState(initialFormState);
      const {isSignUpComplete, userId, nextStep} = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
            'custom:role': role,
            'custom:tenant': tenant,
          },
        },
      });
      console.log('user created', userId);
    } catch (err) {
      console.log('error creating user:', err);
    }
  }
  return (
    <View>
      <TextInput
        onChangeText={value => setInput('email', value)}
        style={styles.input}
        value={formState.email}
        placeholder="Email"
      />
      <TextInput
        onChangeText={value => setInput('password', value)}
        style={styles.input}
        value={formState.password}
        placeholder="Password"
        type="password"
      />
      <Pressable onPress={addUser} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Create User</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: 400, flex: 1, padding: 20, alignSelf: 'center'},
  todo: {marginBottom: 15},
  input: {
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: {fontSize: 20, fontWeight: 'bold'},
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 8,
  },
  buttonText: {color: 'white', padding: 16, fontSize: 18},
});

export default AddUserScreen;
