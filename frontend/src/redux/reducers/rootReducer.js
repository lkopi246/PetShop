import { combineReducers } from "redux";

import {
  cartReducer,
  cartShowReducer,
  cartListReducer,
} from "./cartReducer/cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  cartShow: cartShowReducer,
  cartListReducer: cartListReducer,
});

export default rootReducer;
