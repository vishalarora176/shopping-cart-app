import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartControls from './CartControls/CartControls';

import * as actionTypes from '../../store/actions';

import classes from './CartControlsList.css';

class CartControlsList extends Component {
    render() {

        let newCartData = [];

        for (const key in this.props.shoppingCart) {
            const element = this.props.shoppingCart[key];
            newCartData.push(element);                
        }

        const cartControls = newCartData.map((item, index) => {
            return (
                <CartControls 
                    key={item.id}
                    itemName={item.name}
                    itemPrice={item.price}
                    imageURL={item.img_url}
                    itemCount={item.quantity}
                    itemAdded={() => this.props.addToCartHandler(item.id)}
                    itemRemoved={() => this.props.removeFromCartHandler(item.id)}
                    deleteItem={() => this.props.deleteItemHandler(item.id)}
                />
            );
        });

        return (
            <div className={classes.orderSummary}>
                <div  className={classes.orderSummaryHeader}>
                    <div className={classes.itemLabel}>Items ({this.props.totalItemsInCart})</div>
                    <div className={classes.quantityLabel}>Qty</div>
                    <div className={classes.priceLabel}>Price</div>
                </div>
                { cartControls }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        shoppingCart: state.shoppingCart,
        totalItemsInCart: state.totalItemsInCart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCartHandler: (id) => dispatch({type: actionTypes.ADD_TO_CART, id: id}),
        removeFromCartHandler: (id) => dispatch({type: actionTypes.REMOVE_FROM_CART, id: id}),
        deleteItemHandler: (id) => dispatch({type: actionTypes.DELETE_ITEM, id: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartControlsList);