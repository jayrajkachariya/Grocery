import { combineReducers } from 'redux';

import loadingReducer from './loadProdcuts/loadingReducer';
import errorReducer from './loadProdcuts/errorReducer';
import productsReducer from "./loadProdcuts/productsReducer";
import productDetailsReducer from "./productDetails/productDetailsReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    products: productsReducer,
    error: errorReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
});

export default rootReducer;
