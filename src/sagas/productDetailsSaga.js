import { put, call, take } from "redux-saga/effects";

import { setError, setProductDetails } from "../actions";
import { PRODUCT_DETAILS } from "../constants";
import { fetchProductDetails } from "../api/productsApi";

export default function* handleLoadProductDetails() {
  try {
    const { productName } = yield take(PRODUCT_DETAILS.LOAD);
    const product = yield call(fetchProductDetails, productName);
    yield put(setProductDetails(product));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}
