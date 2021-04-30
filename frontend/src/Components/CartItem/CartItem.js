import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

import {
  deleteCart,
  incCartItemCounter,
  decCartItemCounter,
  incCartListCounter,
  decCartListCounter,
} from "../../redux/action/cartAction";

import "./CartItem.css";

const CartItem = ({
  data,
  cartList,
  deleteToCart,
  incCartCounter,
  decCartCounter,
  decCartLCounter,
  incCartLCounter,
}) => {
  const checkId = cartList.find((item) => item.id === data.id);
  useEffect(() => {
    if (data.counter === 0) deleteToCart(data.id);
  }, [data.id, deleteToCart, data.counter]);

  const onHandleDelete = () => {
    // console.log(data);
    deleteToCart(data.id);
    decCartLCounter(data.counter);
  };

  return (
    <div className="cartItem">
      <div className="cartItem_header">
        <div className="cartItem_image"></div>
        <div className="cartItem_info">
          <p className="cartItem_name">{data.name}</p>
          <p className="cartItem_type">{data.types}</p>
        </div>
        <button className="cartItem_deleteButton" onClick={onHandleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <div className="cartItem_footer">
        <div className="cartItem_counter">
          <button
            className="minusInstanceButton"
            onClick={() => {
              decCartCounter(data.id);
              decCartLCounter(1);
            }}
          >
            -
          </button>
          <p className="instanceCounter">{checkId.counter}</p>
          <button
            className="plusInstanceButton"
            onClick={() => {
              incCartCounter(data.id);
              incCartLCounter(1);
            }}
          >
            +
          </button>
        </div>
        <div className="cartItem_price">{data.prices}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartList: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  deleteToCart: (id) => {
    dispatch(deleteCart(id));
  },
  incCartCounter: (id) => {
    dispatch(incCartItemCounter(id));
  },
  decCartCounter: (id) => {
    dispatch(decCartItemCounter(id));
  },
  incCartLCounter: (count) => {
    dispatch(incCartListCounter(count));
  },
  decCartLCounter: (count) => {
    dispatch(decCartListCounter(count));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
