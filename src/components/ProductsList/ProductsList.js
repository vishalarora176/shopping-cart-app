import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem/ProductItem';
import * as actionTypes from '../../store/actions'

import classes from './ProductsList.css';

class productsList extends Component {
    render () {
        let item = this.props.products.map((value, index) => {
            return <ProductItem key={value.id}
                        name={value.name}
                        price={value.price}
                        type={value.type}
                        discount={value.discount}
                        imgSrc={value.img_url}
                        addToCartHandler={() => this.props.addCartHandler(value.id)}
                    />
        });

        return (
            <div className={classes.items}>
                {item}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCartHandler: (id) => dispatch({type: actionTypes.ADD_TO_CART, id: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(productsList);
