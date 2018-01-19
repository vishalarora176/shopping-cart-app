import React from 'react';
import classes from './ProductItem.css';

const productItem = ( props ) => {
    let discount = <label style={{padding: '5px'}}></label>;
    let discountedPrice = null;
    let originalPriceClassName = "";
    if (props.discount !== 0) {
        discount = <label className={classes.discount}>{props.discount}% off</label>;
        const discPrice = props.price - (props.price * (props.discount / 100));
        discountedPrice = <label>${discPrice}</label>;
        originalPriceClassName = classes.priceDiscounted;
    }
    return (
        <div className={classes.item}>
            { discount }
            <div className={classes.itemImage}>
                <img src={props.imgSrc} />
            </div>
            <div className={classes.itemInfo}>
                <label className={classes.itemLabel}>{props.name}</label>
                <div className={classes.itemControls}>
                    <div>
                        <label className={originalPriceClassName}>${props.price}</label>
                        { discountedPrice }
                    </div>
                    <button className={classes.button} onClick={props.addToCartHandler}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default productItem;
