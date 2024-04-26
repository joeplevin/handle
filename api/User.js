import {
  AdminCreateUserCommand,
  CognitoIdentityProviderClient,
} from '@aws-sdk/client-cognito-identity-provider';
import React, {useState} from 'react';

const cognitoClient = new CognitoIdentityProviderClient({region: 'eu-west-2'});

const createUser = async (userPoolId, username, email, password) => {
  const command = new AdminCreateUserCommand({
    UserPoolId: userPoolId,
    Username: username,
    UserAttributes: [{Name: 'email', Value: email}],
    TemporaryPassword: password,
  });

  try {
    const response = await cognitoClient.send(command);
    console.log('User created?', response);
  } catch (err) {
    console.log(err);
  }
};

export default createUser;
