import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons'

import styles from './Order.module.css';

const order = (props) => {

    let editLink = process.env.PUBLIC_URL + '/edit';
    editLink = editLink + props.index;

    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.price}</td>
            <td>{props.addition}</td>
            <td style={{textAlign: "right"}}>
                <Link to={editLink}>
                    <FontAwesomeIcon icon={faPen} className={styles.IconButton}/>
                </Link>
                <FontAwesomeIcon icon={faTimes} className={styles.IconButton} onClick={props.delete}/>
            </td>
        </tr>
    );
}

order.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  addition: PropTypes.string,
  delete: PropTypes.func,
}



export default order;