import React from 'react';

import styles from './OrderListPage.module.css';
import OrderList from '../../components/OrderList/OrderList';

const orderListPage = () => (
  <div className={styles.OrderListPage}>
    <OrderList />
  </div>
)

export default orderListPage;
