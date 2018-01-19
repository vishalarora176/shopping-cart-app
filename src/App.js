import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import ShoppingCart from './containers/ShoppingCart/ShoppingCart';
import { Route, Switch } from 'react-router-dom';
import Products from './containers/Products/Products';

class App extends Component {
  render() {
    return (
      <div>
          <Layout>
              <Switch>
                  <Route path="/checkout"  component={ShoppingCart} />
                  <Route path="/" component={Products} />
              </Switch>
          </Layout>
      </div>
    );
  }
}

export default App;
