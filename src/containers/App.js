import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Toolbar from './Toolbar/Toolbar';

import OrderListPage from './OrderListPage/OrderListPage';
import OrderFormPage from './OrderFormPage/OrderFormPage';

const App = () => (
  <Router>
    <Toolbar />
    <Route path={`${process.env.PUBLIC_URL}/`} exact component={OrderListPage}/>
    <Route path={`${process.env.PUBLIC_URL}/order`} component={OrderFormPage}/>
    <Route path={`${process.env.PUBLIC_URL}/edit/:id`} component={OrderFormPage}/>
  </Router>
);

export default App;
