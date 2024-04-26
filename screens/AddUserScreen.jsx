import React from 'react';
import {TextInput, Pressable, Text, View} from 'react-native';
import createUser from '../api/User';
import {useState} from 'react';
import {fetchAuthSession} from 'aws-amplify/auth';
import {StyleSheet} from 'react-native';

const initialFormState = {name: '', email: '', tempPass: ''};

const AddUserScreen = () => {
  const [formState, setFormState] = useState(initialFormState);

  function setInput(key, value) {
    setFormState({...formState, [key]: value});
  }

  async function getUserPool() {
    const {tokens} = await fetchAuthSession();
    return tokens.accessToken.payload['cognito:groups'];
  }

  const userPoolId = getUserPool();

  async function addUser() {
    try {
      if (!formState.name || !formState.email || !formState.tempPass) return;
      const user = {...formState, userPoolId};
      console.log('user:', user);
      setFormState(initialFormState);
      await createUser(user);
    } catch (err) {
      console.log('error creating user:', err);
    }
  }
  return (
    <View>
      <TextInput
        onChangeText={value => setInput('name', value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <TextInput
        onChangeText={value => setInput('email', value)}
        style={styles.input}
        value={formState.email}
        placeholder="Email"
      />
      <TextInput
        onChangeText={value => setInput('tempPass', value)}
        style={styles.input}
        value={formState.tempPass}
        placeholder="Temporary Password"
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
