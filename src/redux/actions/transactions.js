/* eslint-disable prettier/prettier */
import http from '../../helpers/http';
import {API_URL} from '@env';

export const getProducts = (id, token) => {
  return async dispatch => {
      const {data} = await http(token).get(`${API_URL}/products/${id}`);
      console.log('ini data', data);
      dispatch({
        type: 'GET_PRODUCTS',
        payload: data.results,
      });
  };
};
