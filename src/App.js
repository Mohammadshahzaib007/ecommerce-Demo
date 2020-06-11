import React from 'react';
import { Route } from 'react-router-dom';


import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import Cart from './containers/Cart/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" component={Cart} />
      </Layout>
    </div>
  );
}

export default App;
