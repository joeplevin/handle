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
    console.log(`The signInDetails: ${signInDetails}`);
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
    fetchTodos();
    currentAuthenticatedUser();
  }, []);

  function setInput(key, value) {
    setFormState({...formState, [key]: value});
  }

  async function fetchTodos() {
    try {
      const todoData = await client.graphql({
        query: listTodos,
      });
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log('error fetching todos');
    }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = {...formState};
      setTodos([...todos, todo]);
      setFormState(initialFormState);
      await client.graphql({
        query: createTodo,
        variables: {input: todo},
      });
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SignOutButton />
        <TextInput
          onChangeText={value => setInput('name', value)}
          style={styles.input}
          value={formState.name}
          placeholder="Name"
        />
        <TextInput
          onChangeText={value => setInput('description', value)}
          style={styles.input}
          value={formState.description}
          placeholder="Description"
        />
        <Pressable onPress={addTodo} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Create todo</Text>
        </Pressable>
        {todos.map((todo, index) => (
          <View key={todo.id ? todo.id : index} style={styles.todo}>
            <Text style={styles.todoName}>{todo.name}</Text>
            <Text style={styles.todoDescription}>{todo.description}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
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
export default HomeScreen;
