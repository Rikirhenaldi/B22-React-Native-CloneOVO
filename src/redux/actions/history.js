/* eslint-disable prettier/prettier */
import http from '../../helpers/http';
import {API_URL} from '@env';

export const getHistoryTransfer = (token, searchByNumber) => {
  return async dispatch => {
    try {
      const {data} = await http(token).get(`${API_URL}/users/history-transfers?searchByNumber=${searchByNumber}`);
      console.log('ini data', data);
      dispatch({
        type: "GET_HISTORY_TRANSFER",
        payload: data.results,
      });
    } catch (err) {
      dispatch({
        type: "GET_HISTORY_TRANSFER_FAILED",
        payload: err.response.data.message,
      });
    }
  };
};
