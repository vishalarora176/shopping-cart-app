import React from 'react';
import CartItem from './CartItem/CartItem';
import CartItemQuantity from './CartItemQuantity/CartItemQuantity';
import CartItemPrice from './CartItemPrice/CartItemPrice';

import classes from './CartControls.css';

const cartControls = ( props ) => {
    return (
        <div className={classes.cartControls}>
            <div className={classes.itemName}>
                <CartItem name={props.itemName} imageURL={props.imageURL} delete={props.deleteItem}/>
            </div>
            <div className={classes.itemQuantity}>
                <CartItemQuantity count={props.itemCount} add={props.itemAdded} remove={props.itemRemoved}/>
            </div>
            <div className={classes.itemPrice}>
                <CartItemPrice itemTotalPrice={props.itemPrice * props.itemCount}/>
            </div>
        </div>
    );
}

export default cartControls;