import "./cartContainer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import CartItem from "../CartItem/CartItem";

import { cartClose, cartOpen } from "../../redux/action/cartAction";
import { connect } from "react-redux";

const CartContainer = ({
  cartList,
  cartShow,
  opCart,
  closeCart,
  cartListReducerValue,
}) => {
  const onHandleOpenCart = () => {
    if (cartShow) {
      closeCart();
    } else {
      opCart();
    }
  };

  return (
    <section className={`cartContainer ${cartShow ? "" : "open"}`}>
      <div className="cartHeader">
        <button className="cartHeader_button" onClick={onHandleOpenCart}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <h3 className="cartHeader_heading">
          SHOPPING CART ({cartListReducerValue})
        </h3>
      </div>
      <div className="cartList">
        {cartList.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </div>
      <div className="cartFooter"></div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  cartList: state.cart,
  cartShow: state.cartShow,
  cartListReducerValue: state.cartListReducer,
});

const mapDispatchToProps = (dispatch) => ({
  opCart: () => {
    dispatch(cartOpen());
  },
  closeCart: () => {
    dispatch(cartClose());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
