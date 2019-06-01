import { PRODUCT_DETAILS, PRODUCTS } from "../../constants";

const errorReducer = (state = null, {type, error}) => {
    switch (type) {
        case PRODUCTS.LOAD_FAIL:
        case PRODUCT_DETAILS.LOAD_FAIL:
            return error;

        case PRODUCTS.LOAD:
        case PRODUCTS.LOAD_SUCCESS:
        case PRODUCT_DETAILS.LOAD:
        case PRODUCT_DETAILS.LOAD_SUCCESS:
            return null;

        default:
            return state;
    }
};

export default errorReducer;
