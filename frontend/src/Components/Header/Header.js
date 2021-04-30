import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { cartOpen, cartClose } from "../../redux/action/cartAction";
import { connect } from "react-redux";
import "./Header.css";
const Header = ({ openCart, closeCart, status }) => {
  const onHandleShowCart = () => {
    // console.log(status);
    if (status) {
      closeCart();
    } else {
      openCart();
    }
  };
  return (
    <header className="header">
      <section className="header_top">
        <div className="header_logoCont">
          <Link to="/">
            <div className="header_logo"></div>
          </Link>
          <div className="header_extrainfo"></div>
          <p className="header_number">123456789</p>
        </div>
        <p className="header_email">myShop@gmail.com</p>
        <Link to="/signup" className="header_user styledHeaderButton">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <button
          className="header_cart styledHeaderButton"
          onClick={onHandleShowCart}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </section>
      <nav className="header_bot">
        <Link to="/shop">Shop</Link>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  status: state.cartShow,
});
const mapDispatchToProps = (dispatch) => ({
  openCart: () => {
    dispatch(cartOpen());
  },
  closeCart: () => {
    dispatch(cartClose());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
