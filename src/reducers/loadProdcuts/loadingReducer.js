import { PRODUCTS, PRODUCT_DETAILS } from '../../constants';

const loadingReducer = (state = false, {type}) => {
    switch (type) {
        case PRODUCTS.LOAD:
        case PRODUCT_DETAILS.LOAD:
            return true;

        case PRODUCTS.LOAD_SUCCESS:
        case PRODUCT_DETAILS.LOAD_SUCCESS:
        case PRODUCTS.LOAD_FAIL:
        case PRODUCT_DETAILS.LOAD_FAIL:
            return false;

        default:
            return state;
    }
};

export default loadingReducer;
