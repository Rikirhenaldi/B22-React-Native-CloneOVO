/* eslint-disable prettier/prettier */
const initialState = {
    products: {},
  };
  
  const users = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_PRODUCTS': {
        return {
          ...state,
          products: action.payload,
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
  