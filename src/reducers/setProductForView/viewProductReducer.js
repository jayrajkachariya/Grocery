import { VIEW_PRODUCT} from '../../constants';

const viewProductReducer = (state = null, {type, product}) => {
  if (type === VIEW_PRODUCT.SET) {
    return product;
  }
  return state;
};

export default viewProductReducer;
