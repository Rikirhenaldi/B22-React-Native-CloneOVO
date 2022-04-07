/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import createAsyncStorage from 'redux-persist-react-native-async-storage';

import auth from './auth';
import users from './users';
import transactions from './transactions';
import history from './History';

const storage = createAsyncStorage();

const persistAuth = {
  storage,
  key: 'auth',
};
const rootReducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  users,
  transactions,
  history,
});

export default rootReducer;
