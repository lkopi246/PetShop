import {
  ADD_CART,
  CART_CLOSE,
  CART_OPEN,
  DELETE_CART,
  INC_CART_ITEM_COUNTER,
  DEC_CART_ITEM_COUNTER,
  INC_CART_LIST_COUNTER,
  DEC_CART_LIST_COUNTER,
} from "../../actionConstants/cartConstants";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const splitId = action.payload.item.id.split("_");
      const cartItem = state.find(
        (item) =>
          item.id.split("_")[0] === splitId[0] &&
          item.types === action.payload.item.types
      );
      if (cartItem !== undefined) {
        cartItem.counter = cartItem.counter + 1;
        return [...state];
      } else {
        action.payload.item.id = `${splitId[0]}_${action.payload.item.types}`;
        return [...state, action.payload.item];
      }
    case DELETE_CART:
      return state.filter((item) => item.id !== action.payload.itemId);
    case INC_CART_ITEM_COUNTER:
      const cItem = state.find((item) => item.id === action.payload.itemId);
      if (cItem !== undefined) {
        cItem.counter = cItem.counter + 1;
        return [...state];
      } else return [...state];
    case DEC_CART_ITEM_COUNTER:
      const tempItem = state.find((item) => item.id === action.payload.itemId);
      if (tempItem !== undefined) {
        if (tempItem.counter > 0) {
          tempItem.counter = tempItem.counter - 1;
        } else {
          tempItem.counter = 0;
        }

        return [...state];
      } else return [...state];
    default:
      return state;
  }
};

const cartShowInitialState = false;

export const cartShowReducer = (state = cartShowInitialState, action) => {
  switch (action.type) {
    case CART_OPEN:
      return true;
    case CART_CLOSE:
      return false;
    // (prevState) => (prevState ? false : true);
    default:
      return state;
  }
};

const cartListInitialState = 0;

export const cartListReducer = (state = cartListInitialState, action) => {
  switch (action.type) {
    case INC_CART_LIST_COUNTER:
      return state + action.payload.count;
    case DEC_CART_LIST_COUNTER:
      return state - action.payload.count;
    default:
      return state;
  }
};
