/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify} from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
import {
  AmazonAIPredictionsProvider,
  Predictions,
} from '@aws-amplify/predictions';
import Auth from '@aws-amplify/auth';
import awsconfig from './src/aws-exports';
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import {ReadableStream} from 'web-streams-polyfill';

globalThis.ReadableStream = ReadableStream;

try {
  Amplify.configure(awsconfig);
} catch (e) {
  console.log('Error: ', e);
}

AppRegistry.registerComponent(appName, () => App);
