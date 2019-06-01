import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { addProductToCart, subtractProductFromCart } from "../../actions";

import "./Cart.css";

export const QtyView = ({ count, addProductToCart, subtractProductFromCart }) => (
  <div className="d-flex align-item-center my-1">
    <button className="qty-view-btn border-red mr-1" onClick={subtractProductFromCart}>-</button>
    <div className="font-size-5 font-weight-5 mr-1">{count}</div>
    <button className="qty-view-btn border-green" onClick={addProductToCart}>+</button>
  </div>
);

class Cart extends Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.cart !== this.props.cart;
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">CART</h1>
        {
          this.props.cart.length !== 0 ?
            this.props.cart.map(item =>
              <div className="cart-card font-weight-4 my-1" key={item._id}>
                <div className="f-1">
                  <img src={item.img[0]} alt={item.productName} height={75} width={75}/>
                </div>
                <div className="f-3">
                  <div className="font-size-5 font-weight-bold">{item.productName}</div>
                  <div className="card-product-false-mrp">MRP: &#8377; <s>{item.productMRP}</s></div>
                  <div
                    className="card-product-mrp font-size-5">Discounted
                    price: &#8377; {Math.floor(item.productMRP - (item.productMRP * item.productDiscountInPercent / 100))}</div>
                </div>
                <div className="font-weight-5 font-size-5">
                  <div className="text-center my-1">Qty.</div>
                  <QtyView addProductToCart={() => this.props.addProductToCart(item)}
                           subtractProductFromCart={() => this.props.subtractProductFromCart(item)}
                           count={item.count}
                  />
                </div>
                <div className="font-weight-5 font-size-5 f-1">
                  <div className="text-center my-1">&#8377;</div>
                  <div
                    className="text-center my-1">{Math.floor(item.productMRP - (item.productMRP * item.productDiscountInPercent / 100)) * item.count}</div>
                </div>
              </div>
            ) :
            <div className="text-center my-3 font-weight-bold font-size-3">Ah Oh! You cart is empty! Fill some grocery!
              :(</div>
        }
        <div className="text-center">
          <h3>Total: &#8377; {
            this.props.cart.length !== 0 ?
            this.props.cart
              .map(item =>
                Math.floor(item.productMRP - (item.productMRP * item.productDiscountInPercent / 100)) * item.count)
              .reduce((accumulator, currentValue) => accumulator + currentValue)
              : 0
          }</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = dispatch => ({
  pushOnHistory: route => dispatch(push(route)),
  addProductToCart: product => dispatch(addProductToCart(product)),
  subtractProductFromCart: product => dispatch(subtractProductFromCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
