import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actionTypes from '../../actions/types';
import styles from './OrderFormPage.module.css';

class OrderFormPage extends Component {

    id = this.props.match.params.id;
    oldOrder = this.id ? this.props.drinks[this.id] : null;
    oldTitle = this.id ? this.oldOrder.title : null;
    oldPrice = this.id ? this.oldOrder.price : null;
    oldAddition = this.id ? this.oldOrder.addition : null;

    handelEmptyClick = (event) => {
        /* Both field are non-empty */
        if (this.refs.newTitle.value !== "" && this.refs.newPrice.value > 0) {
            if (this.id) {
                this.props.onEditOrder(
                    this.id,
                    this.refs.newTitle.value,
                    parseInt(this.refs.newPrice.value),
                    this.refs.newAddition.value,
                );
            } else {
                this.props.onCreateOrder(
                    this.refs.newTitle.value,
                    parseInt(this.refs.newPrice.value),
                    this.refs.newAddition.value,
                );
            }
        } else {
            event.preventDefault(); // do nothing
            alert('品項與價錢不能是空白');
        }

    }
    render () {
        return (
            <div className={styles.OrderFormPage}>
              <div className={styles.OrderForm}>
                <h3>點飲料</h3>
                <input
                    type='text'
                    ref='newTitle'
                    defaultValue={this.oldTitle}
                    placeholder='請輸入飲料品項名稱'/>
                <input
                    type='number'
                    ref='newPrice'
                    defaultValue={this.oldPrice}
                    placeholder='請輸入飲料價格'/>
                <textarea
                    ref='newAddition'
                    defaultValue={this.oldAddition}
                    placeholder='請輸入附註(ex.甜度冰塊)'/>

                <Link to={`${process.env.PUBLIC_URL}/`}>
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
        onEditOrder: (id, title, price, addition) => dispatch({type: actionTypes.EDIT, id: id, title: title, price: price, addition: addition}),
        onCreateOrder: (title, price, addition) => dispatch({type: actionTypes.CREATE, title: title, price: price, addition: addition})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderFormPage);