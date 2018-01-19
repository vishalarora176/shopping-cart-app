import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import ProductsList from '../../components/ProductsList/ProductsList';


import classes from './Products.css';

class Products extends Component {

    render () {
        return (
            <div className={classes.container}>
                <div className={classes.header}>
                    <span>All Items</span>
                    <NavLink to="/checkout">
                        <Button className={classes.GoToCartButton}>Go to Cart</Button>
                    </NavLink>
                </div>
                <div id="itemsContainer">
                    <ProductsList />
                </div>
            </div>
        )
    }

}

export default Products;
