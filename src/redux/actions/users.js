/* eslint-disable prettier/prettier */
import http from '../../helpers/http';
import {API_URL} from '@env';


export const getProfile = (token) => {
  return async dispatch => {
      const {data} = await http(token).get(`${API_URL}/users/profile`);
      console.log('ini data', data);
      dispatch({
        type: 'GET_PROFILE',
        payload: data.results,
      });
  };
};

export const editPutProfile = (data, token) => {
  return async dispatch => {
    const form = new FormData();
    form.append('picture', {
      uri: data.picture,
      name: 'example.jpg',
      type: 'image/jpeg',
    });
    form.append('name', data.name);
    form.append('email', data.email);
    form.append('phone', data.phoneNumber);
    const {data: userData} = await http(token).put(
      `${API_URL}/users/editprofile`,
      form,
    );
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: {
        data: userData.results,
        message: userData.message,
      },
    });
  };
};


export const topUpBalance = (amount, token) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    form.append('amount', amount);
    try {
      const {data} = await http(token).patch(`${API_URL}/users/topup`, form.toString());
      dispatch({
        type: 'TOP_UP_BALANCE',
        payload: data.message,
    });
    } catch (err){
      dispatch({
        type: 'TOP_UP_BALANCE_FAILED',
        payload: err.response.data.message,
    });
    }
  };
};

export const transferBalance = (phone, amount, token) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    form.append('phone', phone);
    form.append('amount', amount);
    try {
      const {data} = await http(token).patch(`${API_URL}/users/transfer`, form.toString());
      dispatch({
        type: 'TRANSFERS_BALANCE',
        payload: data.message,
    });
    } catch (err){
      dispatch({
        type: 'TRANSFERS_BALANCE_FAILED',
        payload: err.response.data.message,
    });
    }
  };
};
