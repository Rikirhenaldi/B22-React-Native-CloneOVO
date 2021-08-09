/* eslint-disable prettier/prettier */
const initialState = {
  onAuth: false,
  token: null,
  errMsg: '',
  sccMsg: '',
  data : {},
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      return {
        ...state,
        token: action.payload,
      };
    }
    case 'AUTH_LOGIN_PIN': {
      return {
        ...state,
        token: action.payload,
      };
    }
    case 'AUTH_LOGIN_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'AUTH_REGISTER': {
      return {
        ...state,
        sccMsg: action.payload,
      };
    }
    case 'AUTH_REGISTER_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'SET_CLEAR_MESSAGE':
      return {
        ...state,
        errMsg: '',
        sccMsg: '',
      };
    case 'AUTH_LOGOUT': {
      return {
        ...state,
        token: null,
        errMsg: '',
        sccMsg: '',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default auth;
