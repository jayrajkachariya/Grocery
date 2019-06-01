import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { getProductDetails, addProductToCart, subtractProductFromCart } from "../../actions";
import "./ViewProduct.css";
import Button from "../Button";
import ImageViewer from "./ImageViewer";
import LoadingViewProduct from "./LoadingViewProduct";
import { QtyView } from "../Cart/Cart";

class ViewProduct extends Component {

  state = {
    activeImageIndex: 0
  };

  componentDidMount() {
    if (!this.props.productDetails) {
      this.props.getProductDetails(this.props.match.params.product);
    }
  }

  onAddToCart = product => {
    this.props.addProductToCart(product);
  };

  setActiveIndex = index => this.setState(() => {
    return { activeImageIndex: index };
  });

  render() {
    let selectedProductForView = this.props.productDetails;
    if (!selectedProductForView) {
      selectedProductForView = {};
    }
    const {
      img,
      productDiscountInPercent,
      productFeatures,
      ingredients,
      productDisclaimer,
      productName,
      productManufacturer,
      productMRP,
      brand,
      _id,
      weightVariant
    } = selectedProductForView;

    return (
      this.props.isLoading
        ?
        <LoadingViewProduct/>
        :
        this.props.error
          ?
          <div className="error">{this.props.error}</div>
          :
          <div className="d-grid grid-2 container">

            <div className="p-4">
              <div className="offer-strip-full">{productDiscountInPercent}% OFF</div>
              <div className="font-size-3 my-1 font-weight-bold">{productName}</div>
              <ImageViewer img={img}
                           alt={productName}
                           setActiveIndex={this.setActiveIndex}
                           activeImageIndex={this.state.activeImageIndex}
              />
            </div>

            <div className="p-4">
              <div
                className="card-product-mrp font-size-4">Discounted
                price: &#8377; {Math.floor(productMRP - (productMRP * productDiscountInPercent / 100))}</div>
              <div className="card-product-false-mrp">MRP: &#8377; <s>{productMRP}</s></div>
              <div className="font-size-5 my-1 font-weight-5">Variant: {weightVariant}</div>

              {
                this.props.cart.find(x => x._id === _id)
                  ?
                  <QtyView count={this.props.cart.find(x => x._id === _id).count}
                           addProductToCart={() => this.props.addProductToCart(selectedProductForView)}
                           subtractProductFromCart={() => this.props.subtractProductFromCart(selectedProductForView)}
                  />
                  :
                  <Button
                    onClick={() => this.onAddToCart(this.props.productDetails)}
                    ClassName="button-add-to-cart my-1"
                  >
                    Add to Cart
                  </Button>
              }

              <div className="font-size-4 my-1">More From: {brand}</div>
              <div className="font-size-5 my-1">Manufacturer Details: {productManufacturer}</div>
              {
                ingredients && ingredients.length !== 0 &&
                <Fragment>
                  <div>
                    <div className="font-size-5 my-1 font-weight-5">Ingredients</div>
                    <div className="font-size-5">{ingredients.join(", ")}</div>
                  </div>
                </Fragment>
              }
              {
                productFeatures &&
                <Fragment>
                  <div>
                    <div className="font-size-5 my-1 font-weight-5">Product Details</div>
                    <ul>
                      {productFeatures.map((feature, i) => <li key={i}>{feature}</li>)}
                    </ul>
                  </div>
                </Fragment>
              }
              {
                productDisclaimer &&
                <div>
                  <div className="font-size-5 my-1 font-weight-5">Product Disclaimer</div>
                  <div className="font-size-5">{productDisclaimer}</div>
                </div>
              }
            </div>
          </div>
    );
  }
}

const mapStateToProps = ({ isLoading, error, productDetails, cart }) => ({
  isLoading, error, productDetails, cart
});

const mapDispatchToProps = dispatch => ({
  getProductDetails: productName => dispatch(getProductDetails(productName)),
  addProductToCart: product => dispatch(addProductToCart(product)),
  subtractProductFromCart: product => dispatch(subtractProductFromCart(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewProduct);
