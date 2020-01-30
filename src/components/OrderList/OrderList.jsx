import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Order from './Order/Order';
import * as actionTypes from '../../actions/types';
import styles from './OrderList.module.css';

class OrderList extends Component {
    render () {
        console.log(this.props.drinks);
        return (
            this.props.drinks.length ? <table className={styles.OrderList}>
                <thead>
                    <tr>
                        <th>飲料品項</th>
                        <th>價格</th>
                        <th>附註</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.drinks.map((drink, index)=>(
                        <Order
                            key={index}
                            index={index}
                            title={drink.title}
                            price={drink.price}
                            addition={drink.addition}
                            delete={() => this.props.onDeleteDrink(index)} />
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>杯數：{this.props.drinks.length}</td>
                        <td>總價：{this.props.drinks.reduce((total, drink) => total += drink.price, 0)}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table> : <h2 className={styles.NoOrder}>目前還沒有人點飲料，點擊右上角(+)點飲料</h2>
        )
    }
}

OrderList.propTypes = {
  drinks: PropTypes.array,
  onDeleteDrink: PropTypes.func,
}

const mapStateToProps = state => {
    return {
        drinks: state.drinks
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteDrink: (id) => dispatch({type: actionTypes.DELETE, id: id})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);