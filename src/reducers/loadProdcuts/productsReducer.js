import { PRODUCTS} from '../../constants';

const productsReducer = (state = [], {type, products}) => {
    if (type === PRODUCTS.LOAD_SUCCESS) {
        return [...products];
    }
    return state;
};

export default productsReducer;
