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
    <Route path='/DailyDrink/' exact component={OrderListPage}/>
    <Route path='/DailyDrink/order' component={CreateOrderPage}/>
    <Route path='/DailyDrink/edit/:id' component={EditOrderPage}/>
  </Router>
);

export default App;
