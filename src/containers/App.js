import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Toolbar from './Toolbar/Toolbar';

import OrderListPage from './OrderListPage/OrderListPage';
import CreateOrderPage from './CreateOrderPage/CreateOrderPage';
import EditOrderPage from './EditOrderPage/EditOrderPage';

const App = () => (
  <Router>
    <Toolbar />
    <Route path='/' exact component={OrderListPage}/>
    <Route path='/order' component={CreateOrderPage}/>
    <Route path='/edit/:id' component={EditOrderPage}/>
  </Router>
);

export default App;
