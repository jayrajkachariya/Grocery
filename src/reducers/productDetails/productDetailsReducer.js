import { PRODUCT_DETAILS, VIEW_PRODUCT } from "../../constants";

const productDetailsReducer = (state = null, {type, product}) => {
  if (type === PRODUCT_DETAILS.LOAD_SUCCESS || type === VIEW_PRODUCT.SET) {
    return product;
  }
  return state;
};

export default productDetailsReducer;
