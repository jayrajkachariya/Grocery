import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "../sagas";

import rootReducer from "../reducers";

import { routerMiddleware } from "react-router-redux";

import { createBrowserHistory } from "history";

export const browserHistory = createBrowserHistory();

const middleware = routerMiddleware(browserHistory);

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
      applyMiddleware(
        sagaMiddleware,
        middleware
      ),
      window.__REDUX_DEVTOOLS_EXTENSION__()
      )
      : applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
