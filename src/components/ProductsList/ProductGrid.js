import React, { Component } from "react";
import { connect } from "react-redux";

import { addProductToCart, loadProducts, setSelectedProductForView, subtractProductFromCart } from "../../actions";
import "./ProductGrid.css";
import Button from "../Button";
import { push } from "react-router-redux";
import { QtyView } from "../Cart/Cart";

class ProductGrid extends Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  viewProduct = product => {
    this.props.setSelectedProductForView(product);
    this.props.pushOnHistory(`/view-product/${encodeURI(product.productCategory)}/${encodeURI(product.productSubCategory)}/${encodeURI(product.productName)}`);
  };

  render() {
    const { products, error } = this.props;
    return (
      <div className="content">
        <section className="grid">
          {products.map(product => (
            <div
              key={product._id}
              className="item item-1"
            >
              <div className="offer-strip">{product.productDiscountInPercent}% OFF</div>
              <div className="card-image">
                <img
                  className="img"
                  src={product.img[0]}
                  alt={product.productName}
                />
              </div>
              <div className="card-product-name">{product.productName}</div>
              <br/>
              <div className="d-flex align-item-center justify-content-between">
                <div className="d-flex align-item-center">
                  <div
                    className="card-product-mrp">&#8377; {Math.floor(product.productMRP - (product.productMRP * product.productDiscountInPercent / 100))}</div>
                  <div className="card-product-false-mrp">&#8377; <s>{product.productMRP}</s></div>
                </div>
                <div className="card-product-mrp">{product.weightVariant}</div>
              </div>
              <br/>
              <div className="d-flex align-item-center justify-content-between">
                <Button
                  onClick={() => this.viewProduct(product)}
                  ClassName="button-view-details"
                >
                  View details
                </Button>

                {
                  this.props.cart.find(x => x._id === product._id)
                    ?
                    <QtyView count={this.props.cart.find(x => x._id === product._id).count}
                             addProductToCart={() => this.props.addProductToCart(product)}
                             subtractProductFromCart={() => this.props.subtractProductFromCart(product)}
                    />
                    :
                    <Button
                      onClick={() => this.props.addProductToCart(product)}
                      ClassName="button-add-to-cart my-1"
                    >
                      Add to Cart
                    </Button>
                }

              </div>
            </div>
          ))}
        </section>
        {error && <div className="error">{JSON.stringify(error)}</div>}
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, products, error, selectedProductForView, cart }) => ({
  isLoading,
  products,
  error,
  selectedProductForView,
  cart
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProducts()),
  setSelectedProductForView: product => dispatch(setSelectedProductForView(product)),
  pushOnHistory: route => dispatch(push(route)),
  addProductToCart: product => dispatch(addProductToCart(product)),
  subtractProductFromCart: product => dispatch(subtractProductFromCart(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductGrid);
