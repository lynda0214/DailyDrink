import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Toolbar.module.css';
import OrderButton from '../../components/OrderButton/OrderButton';

const toolbar = () => (
  <header className={styles.Toolbar}>
    <Link to={`${process.env.PUBLIC_URL}/`} className={styles.Logo}>
      DailyDrinks
    </Link>
    <OrderButton />
  </header>
)

export default toolbar;