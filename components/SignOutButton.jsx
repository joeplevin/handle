import {Text, Pressable} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useAuthenticator} from '@aws-amplify/ui-react-native';
import MIIcon from 'react-native-vector-icons/MaterialIcons';
// retrieves only the current value of 'user' from 'useAuthenticator'
const userSelector = context => [context.user];

const SignOutButton = () => {
  const {user, signOut} = useAuthenticator(userSelector);

  return (
    <Pressable onPress={signOut} style={{paddingRight: 5}}>
      <MIIcon name="logout" size={20} color="#fff" />
    </Pressable>
  );
};

export default SignOutButton;
