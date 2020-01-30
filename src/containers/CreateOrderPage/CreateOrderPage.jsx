import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actionTypes from '../../actions/types';
import styles from './CreateOrderPage.module.css';

class CreateOrderPage extends Component {
    handelEmptyClick = (event) => {
        /* Both field are non-empty */
        if (this.refs.newTitle.value !== "" && this.refs.newPrice.value > 0) {
            this.props.onCreateOrder(
                this.refs.newTitle.value,
                parseInt(this.refs.newPrice.value),
                this.refs.newAddition.value,
            );
        } else {
            event.preventDefault(); // do nothing
            alert('品項與價錢不能是空白');
        }

    }
    render () {
        return (
            <div className={styles.CreateOrderPage}>
                <div className={styles.CreateOrder}>
                    <h3>點飲料</h3>
                    <input
                        type='text'
                        ref='newTitle'
                        placeholder='請輸入飲料品項名稱'
                        required />
                    <input
                        type='number'
                        ref='newPrice'
                        placeholder='請輸入飲料價格'
                        required />
                    <input
                        type='text'
                        ref='newAddition'
                        placeholder='請輸入附註(ex.甜度冰塊)'/>
                    <Link to='/DailyDrink/'>
                        <input
                            type='submit'
                            className={styles.SubmitBtn}
                            onClick={this.handelEmptyClick}
                            value='送出'/>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        drinks: state.drinks
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateOrder: (title, price, addition) => dispatch({type: actionTypes.CREATE, title: title, price: price, addition: addition})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrderPage);