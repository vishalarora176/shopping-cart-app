import React from 'react';
import classes from './CartItem.css';

const cartItem = ( props ) => {
    return (
        <div className={classes.summaryItem}>
            <img src={props.imageURL} ></img>
            <label style={{flexGrow: 2}}>{props.name}</label>
            <button onClick={props.delete}>X</button>
        </div>
    );
}

export default cartItem;