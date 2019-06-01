import {
  PRODUCTS,
  VIEW_PRODUCT,
  PRODUCT_DETAILS,
  CART,
} from "../constants";

const loadProducts = () => ({
  type: PRODUCTS.LOAD
});

const setProducts = products => ({
  type: PRODUCTS.LOAD_SUCCESS,
  products
});

const setError = error => ({
  type: PRODUCTS.LOAD_FAIL,
  error
});

const setSelectedProductForView = product => ({
  type: VIEW_PRODUCT.SET,
  product
});

const getProductDetails = productName => ({
  type: PRODUCT_DETAILS.LOAD,
  productName
});

const setProductDetails = product => ({
  type: PRODUCT_DETAILS.LOAD_SUCCESS,
  product
});

const addProductToCart = product => ({
  type: CART.ADD,
  product
});

const subtractProductFromCart = product => ({
  type: CART.SUBTRACT,
  product
});

export {
  setError,
  loadProducts,
  setProducts,
  setSelectedProductForView,
  getProductDetails,
  setProductDetails,
  addProductToCart,
  subtractProductFromCart,
};
