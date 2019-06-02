import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore, { history } from './store';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import ProductGrid from './components/ProductsList/ProductGrid';
import ViewProduct from './components/ViewProduct/ViewProduct';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Header />
          <Switch>
            <Route path="/view-product/:category/:subCategory/:product" component={ViewProduct} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/" component={Home} />
            <Route component={_404} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

const _404 = () => (
  <div className="d-flex align-item-center justify-content-center h-100 w-100">
    <div>
      <h1>404</h1>
      <h3>Not Found! :(</h3>
    </div>
  </div>
);

const Home = () => <ProductGrid />;

export default App;
