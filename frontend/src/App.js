import React from 'react'
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import ProductsPage from './components/ProductsPage/ProductsPage';
import ProductDetail from './components/ProductDetail/ProductDetail'
import InputPage from './components/InputPage/InputPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/detail/:id" component={ProductDetail} />
          <Route path="/save-product" component={InputPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
