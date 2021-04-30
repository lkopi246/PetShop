import {
  ADD_CART,
  CART_CLOSE,
  CART_OPEN,
  DELETE_CART,
  INC_CART_ITEM_COUNTER,
  DEC_CART_ITEM_COUNTER,
  INC_CART_LIST_COUNTER,
  DEC_CART_LIST_COUNTER,
} from "../actionConstants/cartConstants";

export const addCart = (data) => ({
  type: ADD_CART,
  payload: {
    item: data,
  },
});

export const deleteCart = (itemId) => ({
  type: DELETE_CART,
  payload: {
    itemId,
  },
});

export const incCartItemCounter = (itemId) => ({
  type: INC_CART_ITEM_COUNTER,
  payload: {
    itemId,
  },
});

export const decCartItemCounter = (itemId) => ({
  type: DEC_CART_ITEM_COUNTER,
  payload: {
    itemId,
  },
});

export const cartOpen = () => ({
  type: CART_OPEN,
});

export const cartClose = () => ({
  type: CART_CLOSE,
});

export const incCartListCounter = (count) => ({
  type: INC_CART_LIST_COUNTER,
  payload: {
    count,
  },
});

export const decCartListCounter = (count) => ({
  type: DEC_CART_LIST_COUNTER,
  payload: {
    count,
  },
});
