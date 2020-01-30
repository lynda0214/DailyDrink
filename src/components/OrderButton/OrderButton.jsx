import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import styles from './OrderButton.module.css';

const orderButton = () => (
  <Link to={`${process.env.PUBLIC_URL}/order`} className={styles.OrderButton}>
    <FontAwesomeIcon icon={faPlus} />
  </Link>
);

export default orderButton;