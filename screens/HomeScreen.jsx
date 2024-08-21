import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SignOutButton from '../components/SignOutButton';
import {TextInput, Pressable} from 'react-native';
import {StyleSheet} from 'react-native';
import {generateClient} from 'aws-amplify/api';
import {createTodo} from '../src/graphql/mutations';
import {listTodos} from '../src/graphql/queries';
import {useAuthenticator} from '@aws-amplify/ui-react-native';
import {fetchAuthSession} from 'aws-amplify/auth';
import {getCurrentUser} from 'aws-amplify/auth';
const userSelector = context => [context.user];
const initialFormState = {name: '', description: ''};
const client = generateClient();

async function currentAuthenticatedUser() {
  try {
    const {username, userId, signInDetails} = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${signInDetails.toString()}`);
  } catch (err) {
    console.log(err);
  }
}

const HomeScreen = ({navigation}) => {
  const {user, signOut} = useAuthenticator(userSelector);
  const [formState, setFormState] = useState(initialFormState);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchUserTokens = async () => {
      const {tokens} = await fetchAuthSession();
      return tokens.accessToken.payload['cognito:groups'];
    };
    const userTokens = fetchUserTokens();
    currentAuthenticatedUser();
  }, []);

  function setInput(key, value) {
    setFormState({...formState, [key]: value});
  }

  return (
    <View>
      <View>
        <Text>Home Screen</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
