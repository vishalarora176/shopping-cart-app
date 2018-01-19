import React from 'react';

import classes from './CartItemQuantity.css';

const cartItemQuantity = ( props ) => {
    return (
        <div className={classes.cartItemQuantity}>
            <div className={classes.button} onClick={props.remove}>-</div>
            <div className={classes.itemQuantity}>{props.count}</div>
            <div className={classes.button} onClick={props.add}>+</div>
        </div>
    );
}

export default cartItemQuantity;
