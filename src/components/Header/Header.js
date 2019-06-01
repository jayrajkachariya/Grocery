import React, { Component } from "react";

import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { connect } from "react-redux";
import { push } from "react-router-redux";

class Header extends Component {
  onCart = () => {
    this.props.pushOnHistory('/cart');
  };

  onHome = () => {
    this.props.pushOnHistory('/');
  };

  render() {
    return (
      <header>
        <div className="btn" onClick={this.onHome}>Grocery Shop</div>
        <div className="btn" onClick={this.onCart}>
          <FontAwesomeIcon icon={faShoppingCart} color={"#424242"} className="btn-cart"/>
          <i className="fas fa-camera"/>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = dispatch => ({
  pushOnHistory: route => dispatch(push(route))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
