/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import PushNotification from 'react-native-push-notification';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import {name as appName} from './app.json';
import reduxConfig from './src/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
const redux = reduxConfig();

// let tokenFCM = null;

PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKENFCM:', token.token);
    AsyncStorage.setItem('tokenFCM', token.token);
    // tokenFCM = token.token
    // redux.store.dispatch({type: 'DEVICE_REGISTER_TOKEN', payload: token.token});
  },
});

PushNotification.createChannel({
  channelId: 'general',
  channelName: 'general notification',
});

const Main = () => {
  return (
    <Provider store={redux.store}>
      <PersistGate persistor={redux.persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
