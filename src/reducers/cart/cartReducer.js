import { CART } from '../../constants';

const cartReducer = (state = [], { type, product }) => {
  if (type === CART.ADD) {
    const index = state.findIndex(x => x._id === product._id);
    if (index + 1) {
      // state.splice(index, 1, { ...state[index], count: state[index].count + 1 });
      let newState = [...state];
      newState[index].count++;
      return newState;
    } else {
      let newState = [...state, { ...product, count: 1 }];
      return newState;
    }
  }
  if (type === CART.SUBTRACT) {
    const index = state.findIndex(x => x._id === product._id);
    let newState = [...state];
    if (newState[index].count === 1) {
      newState.splice(index, 1);
    } else {
      newState[index].count--;
    }
    return newState;
  }
  return state;
};

export default cartReducer;
