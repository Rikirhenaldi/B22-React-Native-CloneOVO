/* eslint-disable prettier/prettier */
import http from '../../helpers/http';
import {API_URL} from '@env';
import { pink100 } from 'react-native-paper/lib/typescript/styles/colors';


export const authLogin = (phone) => {
  return async dispatch => {
      console.log(phone);
    const form = new URLSearchParams();
    form.append('phone', phone);
    try {
      const {data} = await http().post(`${API_URL}/auth/loginbynumber`,  form.toString());
      console.log('ini data', data);
      dispatch({
        type: 'AUTH_LOGIN',
        payload: data.token,
      });
      // navigation.reset({index: 0, routes: [{name: 'home'}]});
    } catch (err) {
        console.log('ini eror kenapa' , err);
      dispatch({
        type: 'AUTH_LOGIN_FAILED',
        payload: err.response.data.message,
      });
    }
  };
};

export const authLoginPin = (pin, token) => {
  return async dispatch => {
    const form = new URLSearchParams();
    form.append('pin', pin);
    try {
      const {data} = await http(token).post(`${API_URL}/users/loginpin`,  form.toString());
      console.log('ini data', data);
      dispatch({
        type: 'AUTH_LOGIN',
        payload: data.token,
      });
      // navigation.reset({index: 0, routes: [{name: 'home'}]});
    } catch (err) {
        console.log('ini eror kenapa' , err);
      dispatch({
        type: 'AUTH_LOGIN_FAILED',
        payload: err.response.data.message,
      });
    }
  };
};


export const authLogOut = () =>({
    type: 'AUTH_LOGOUT',
  });

export const authRegister = (name, phone, email, pin) => {
    return async (dispatch) => {
      const form = new URLSearchParams();
      form.append('name', name);
      form.append('phone', phone);
      form.append('email', email);
      form.append('pin', pin);
      try {
        const {data} = await http().post(`${API_URL}/auth/register`, form.toString());
        dispatch({
          type: 'AUTH_REGISTER',
          payload: data.message,
      });
      } catch (err){
        dispatch({
          type: 'AUTH_REGISTER_FAILED',
          payload: err.response.data.errors,
      });
      }
    };
  };

  export const clearMessage = () => ({
    type: 'SET_CLEAR_MESSAGE',
  });

