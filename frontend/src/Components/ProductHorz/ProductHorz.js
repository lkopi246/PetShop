import React, { useState } from "react";

import "./ProductHorz.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faRupeeSign } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

const ProductHorz = () => {
  const [productCounter, setProductCounter] = useState(1);
  const onPlusProductCounter = () => {
    setProductCounter(productCounter + 1);
  };
  const onMinusProductCounter = () => {
    if (productCounter > 1) setProductCounter(productCounter - 1);
    else setProductCounter(1);
  };
  return (
    <div className="productContainer">
      <div className="productImage"></div>
      <div className="productInfo">
        <h3 className="productInfo__mainText">
          HUFT X Disney Mickey Dog and Cat Mat
        </h3>
        <h1 className="productInfo__price">
          <FontAwesomeIcon
            className="productInfo__priceRuppeIcon"
            icon={faRupeeSign}
          />
          1199
        </h1>

        <div className="productInfo__sizeCont">
          <p className="productInfo__sizeText">Size:</p>
          <button className="productInfo__sizeButton">S</button>
          <button className="productInfo__sizeButton">M</button>
        </div>

        <div className="productCounter">
          <p className="productCounter__sizeText">Quantity:</p>
          <button
            className="productCounter__MinusButton"
            onClick={onMinusProductCounter}
          >
            -
          </button>
          <p className="productCounter__digit">{productCounter}</p>
          <button
            className="productCounter__PlusButton"
            onClick={onPlusProductCounter}
          >
            +
          </button>
        </div>

        <button className="product__cartButton">
          <FontAwesomeIcon className="product_cartIcon" icon={faShoppingCart} />
          ADD TO BAG
        </button>
        <button className="product__buyButton">BUY NOW</button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {};
export default connect(mapStateToProps)(ProductHorz);
