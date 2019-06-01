import { put, call, takeEvery } from 'redux-saga/effects';

import { setError, setProducts} from '../actions';
import { PRODUCTS } from '../constants';
import { fetchAllProducts } from '../api/productsApi';

export function* handleLoadProducts() {
    try {
        const products = yield call(fetchAllProducts);
        yield put(setProducts(products));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchLoadProducts() {
    yield takeEvery(PRODUCTS.LOAD, handleLoadProducts);
}
