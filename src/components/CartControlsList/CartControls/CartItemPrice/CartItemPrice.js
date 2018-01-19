import React from 'react';

import classes from './CartItemPrice.css';

const cartItemPrice = ( props ) => {
    return (
        <div className={classes.cartItemPrice}>
            ${props.itemTotalPrice}
        </div>
    );
}

export default cartItemPrice;