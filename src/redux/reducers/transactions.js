const initialState = {
  products: {},
  productdetail: {},
  sccMsg: '',
  errMsg: '',
};

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS': {
      return {
        ...state,
        products: action.payload,
      };
    }
    case 'GET_DETAIL_PRODUCTS': {
      return {
        ...state,
        productdetail: action.payload,
      };
    }
    case 'POST_BUY_PULSA': {
      return {
        ...state,
        sccMsg: action.payload,
      };
    }
    case 'POST_BUY_PULSA_FAILED': {
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
    default: {
      return {
        ...state,
      };
    }
  }
};

export default transactions;
