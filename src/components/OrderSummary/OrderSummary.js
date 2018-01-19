import React from 'react';

import classes from './OrderSummary.css';

const orderSummary = (props) => {
    return (
        <div className={classes.orderSummary}>
            <span><b>Total</b></span>
            <table>
                <tbody>
                    <tr>
                        <td>Items ({props.itemCount}) :</td>
                        <td>${props.totalPrice}</td>
                    </tr>
                    <tr>
                        <td>Discount :</td>
                        <td>-${props.discount}</td>
                    </tr>
                    <tr>
                        <td>Type Discount : </td>
                        <td>-${props.typeDiscount}</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <div className={classes.totalAmountRow}>
                <table>
                    <tbody>
                        <tr>
                            <td><strong>Order Total : </strong></td>
                            <td>${props.totalPrice - props.discount - props.typeDiscount}</td>
                        </tr>
                    </tbody>
                </table>
            </div >
        </div >
    );
}

export default orderSummary;