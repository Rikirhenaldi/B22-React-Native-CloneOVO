/* eslint-disable prettier/prettier */
const initialState = {
  data: {},
  errMsg: '',
  sccMsg: '',
  message: '',
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE': {
      return {
        ...state,
        data: action.payload,
      };
    }
    case 'UPDATE_PROFILE': {
      return {
        ...state,
        data: action.payload.data,
        message: action.payload.message,
      };
    }
    case 'TOP_UP_BALANCE': {
      return {
        ...state,
        sccMsg: action.payload,
      };
    }
    case 'TOP_UP_BALANCE_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'TRANSFERS_BALANCE': {
      return {
        ...state,
        sccMsg: action.payload,
      };
    }
    case 'TRANSFERS_BALANCE_FAILED': {
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

export default users;
