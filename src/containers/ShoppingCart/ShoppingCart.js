import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import CartControlsList from '../../components/CartControlsList/CartControlsList';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

import classes from './ShoppingCart.css';

class ShoppingCart extends Component {

    componentWillMount() {
        if (this.props.totalItemsInCart <= 0) {
            this.props.history.push('/');
        }
    }


    componentDidUpdate() {
        if (this.props.totalItemsInCart <= 0) {
            this.props.history.push('/');
        }
    }

    render () {
        return (
            <div >
                <div className={classes.header}>
                    <NavLink to="/">
                        <button className={classes.back}>Back</button>
                    </NavLink>
                    <span>Order Summary</span>
                </div>
                <div className={classes.summaryContainer}>
                    <CartControlsList />
                    <OrderSummary 
                        itemCount={this.props.totalItemsInCart}
                        totalPrice={this.props.itemsTotalPrice}
                        discount={this.props.discount}    
                        typeDiscount={this.props.typeDiscount}    
                        finalPrice={this.props.finalPrice}    
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        shoppingCart: state.shoppingCart,
        totalItemsInCart: state.totalItemsInCart,
        itemsTotalPrice: state.itemsTotalPrice,
        finalPrice: state.finalPrice,
        discount: state.discount,
        typeDiscount: state.typeDiscount
    }
}

export default connect(mapStateToProps)(ShoppingCart);
