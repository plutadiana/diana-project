export const initialState = {
  products: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      console.log('ADD_PRODUCT', action.payload);
      return {
        ...state,
        products: [
          ...state.products,
          action.payload,
        ],
      };
    }
    case 'REMOVE_PRODUCT': {
      console.log('REMOVE_PRODUCT', action);
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  };
}
