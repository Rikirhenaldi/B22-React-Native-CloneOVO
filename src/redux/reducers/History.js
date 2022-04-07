/* eslint-disable prettier/prettier */
const initialState = {
    historyTransfer: [],
    historyTransaction: [],
    errMsg: '',
  };

  const history = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_HISTORY_TRANSFER': {
        return {
          ...state,
          historyTransfer: action.payload,
        };
      }
      case 'GET_HISTORY_TRANSFER_FAILED': {
        return {
          ...state,
          errMsg: action.payload,
        };
      }
      case 'GET_HISTORY_TRANSACTION': {
        return {
          ...state,
          historyTransaction: action.payload,
        };
      }
      case 'GET_HISTORY_TRANSACTION_FAILED': {
        return {
          ...state,
          errMsg: action.payload,
        };
      }
      default: {
        return {
          ...state,
        };
      }
    }
  };

  export default history;

