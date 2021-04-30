import React, { useState } from "react";
import "./ShopItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

import {
  addCart,
  cartOpen,
  cartClose,
  incCartListCounter,
} from "../../redux/action/cartAction";

const ShopItem = ({ data, addToCart, openCart, incCartLCounter }) => {
  const typeArr = [];
  for (let i = 0; i < data.types.length; i++) {
    typeArr.push(false);
  }
  const { name, prices, types } = data;
  const [typeActive, setTypeActive] = useState(typeArr);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const setActive = (index) => {
    for (let i = 0; i < typeActive.length; i++) {
      typeActive[i] = false;
    }
    typeActive[index] = !typeActive[index];
    setTypeActive([...typeActive]);
    setSelectedIndex(index);
  };

  const setPrice = () => {
    return prices[selectedIndex];
  };

  const handleAddCart = () => {
    addToCart({
      ...data,
      types: types[selectedIndex],
      prices: prices[selectedIndex],
    });
    openCart();
    incCartLCounter(1);
  };

  return (
    <div className="itemcontainer">
      <div className="itemcontainer_imagebox">
        {/* <img className="itemcontainer_image" src="" alt="items" /> */}
      </div>

      <div className="itemcontainer_content">
        <p className="itemcontainer_description">{name}</p>
        <p className="itemcontainer_price">{setPrice()}</p>
        <div className="itemcontainer_buttongroup">
          {types.map((type, index) => (
            <button
              className={`typebutton ${typeActive[index] ? "active" : ""}`}
              onClick={() => setActive(index)}
              key={index}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      <button className="itemcontainer_button" onClick={handleAddCart}>
        <FontAwesomeIcon
          className="itemcontainer_button_icon"
          icon={faShoppingCart}
        />
        <p className="itemcontainer_button_text">ADD TO CART</p>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartList: state.cart,
  showCart: state.cartShow,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => {
    dispatch(addCart(data));
  },
  openCart: () => {
    dispatch(cartOpen());
  },
  closeCart: () => {
    dispatch(cartClose());
  },
  incCartLCounter: (count) => {
    dispatch(incCartListCounter(count));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopItem);
