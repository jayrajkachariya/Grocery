import React, { Component } from 'react';

import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { withRouter } from 'react-router';

class Header extends Component {
  onCart = () => {
    this.props.pushOnHistory('/cart');
  };

  onHome = () => {
    this.props.pushOnHistory('/');
  };

  render() {
    console.log(this.props);
    return (
      <header>
        <div className="btn" onClick={this.onHome}>
          Grocery Shop
        </div>
        {this.props.location.pathname !== '/cart' && (
          <div className="btn" onClick={this.onCart}>
            <FontAwesomeIcon icon={faShoppingCart} color={'#424242'} className="btn-cart" />
          </div>
        )}
      </header>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = dispatch => ({
  pushOnHistory: route => dispatch(push(route))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
