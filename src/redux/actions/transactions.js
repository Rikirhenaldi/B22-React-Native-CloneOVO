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

export const getProductDetail = (token, id) => {
  return async dispatch => {
      const {data} = await http(token).get(`${API_URL}/products/detail/${id}`);
      dispatch({
        type: 'GET_DETAIL_PRODUCTS',
        payload: data.results,
      });
  };
};

export const buyPulsa = (token, id, product, tax, categoryProduct, phoneNumber) => {
  console.log('ini data di action', product);
  return async (dispatch) => {
    const form = new URLSearchParams();
    form.append('product', product);
    form.append('tax', tax);
    form.append('categoryProduct', categoryProduct);
    form.append('phoneNumber', phoneNumber);
    try {
      const {data} = await http(token).post(`${API_URL}/users/transactions/products/${id}`, form.toString());
      dispatch({
        type: 'POST_BUY_PULSA',
        payload: data.message,
    });
    } catch (err){
      dispatch({
        type: 'POST_BUY_PULSA_FAILED',
        payload: err.response.data.message,
    });
    }
  };
};

export const clearMessageTransaction = () => ({
  type: 'SET_CLEAR_MESSAGE',
});
