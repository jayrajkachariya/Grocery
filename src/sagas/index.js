import { all } from 'redux-saga/effects';

import productSaga from './productsSaga';
import productDetailsSaga from "./productDetailsSaga";

export default function* rootSaga() {
    yield all([productSaga(), productDetailsSaga()]);
}
