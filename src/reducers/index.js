import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import loadingReducer from './loadProdcuts/loadingReducer';
import errorReducer from './loadProdcuts/errorReducer';
import productsReducer from './loadProdcuts/productsReducer';
import productDetailsReducer from './productDetails/productDetailsReducer';
import cartReducer from './cart/cartReducer';

const rootReducer = history =>
  combineReducers({
    isLoading: loadingReducer,
    products: productsReducer,
    error: errorReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    router: connectRouter(history)
  });

export default rootReducer;
