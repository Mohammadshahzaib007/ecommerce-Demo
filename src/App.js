import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import Cart from './containers/Cart/Cart';
import CheckOut from './containers/BillRecipe/CheckOut/CheckOut';
import SignUp from './containers/SignUp/SignUp';
import SignIn from './containers/SignIn/SignIn';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={CheckOut} />
          <Route path="/signup"  component={SignUp} />
          <Route path="/Signin" component={SignIn} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
