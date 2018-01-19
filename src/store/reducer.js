import * as actionTypes from './actions';
import { products } from '../assets/data/data';

const initialState = {
    products: products,
    shoppingCart: {},
    totalItemsInCart: 0,
    itemsTotalPrice: 0,
    finalPrice: 0,
    discount: 0,
    typeDiscount: 0
};

const reducer = (state = initialState, action) => {
    let newShoppingCart = {...state.shoppingCart};
    let itemsTotalPrice = state.itemsTotalPrice;
    let discount = state.discount;
    let typeDiscount = state.typeDiscount;
    let finalPrice = state.finalPrice;
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            
            if (newShoppingCart[action.id]) {
                newShoppingCart[action.id].quantity = newShoppingCart[action.id].quantity + 1;
            } else {
                const selectedItem = state.products.filter((item, index) => {
                    return item.id == action.id;
                });
                newShoppingCart[action.id] = { ...selectedItem[0], quantity: 1 };
            }

            itemsTotalPrice += newShoppingCart[action.id].price;

            if (newShoppingCart[action.id].discount) {
                discount += (newShoppingCart[action.id].price * (newShoppingCart[action.id].discount / 100))
            }
            if (newShoppingCart[action.id].type == "fiction") {
                typeDiscount += (newShoppingCart[action.id].price * (15 / 100))
            }

            return {
                ...state,
                shoppingCart: newShoppingCart,
                totalItemsInCart: state.totalItemsInCart + 1,
                itemsTotalPrice: itemsTotalPrice,
                discount: discount,
                typeDiscount: typeDiscount,
                finalPrice: finalPrice
            };
            case actionTypes.REMOVE_FROM_CART:
            let totalItemsCount = state.totalItemsInCart; 
            if (newShoppingCart[action.id] && newShoppingCart[action.id].quantity > 0) {
                newShoppingCart[action.id].quantity = newShoppingCart[action.id].quantity - 1;
                totalItemsCount = totalItemsCount - 1;
                itemsTotalPrice -= newShoppingCart[action.id].price;
                
                if (newShoppingCart[action.id].discount) {
                    discount -= (newShoppingCart[action.id].price * (newShoppingCart[action.id].discount / 100))
                }
                if (newShoppingCart[action.id].type == "fiction") {
                    typeDiscount -= (newShoppingCart[action.id].price * (15 / 100))
                }
            } 
            
            
            
            return {
                ...state,
                shoppingCart: newShoppingCart,
                totalItemsInCart: totalItemsCount,
                itemsTotalPrice: itemsTotalPrice,
                discount: discount,
                typeDiscount: typeDiscount,
                finalPrice: finalPrice
            };

            case actionTypes.DELETE_ITEM:

            // if (newShoppingCart[action.id]) {
            //     newShoppingCart[action.id].quantity = newShoppingCart[action.id].quantity + 1;
            //     delete newShoppingCart[action.id];
            // } 

            itemsTotalPrice = itemsTotalPrice - (newShoppingCart[action.id].price * newShoppingCart[action.id].quantity);

            if (newShoppingCart[action.id].discount) {
                discount -= ((newShoppingCart[action.id].price * newShoppingCart[action.id].quantity) * (newShoppingCart[action.id].discount / 100))
            }
            if (newShoppingCart[action.id].type == "fiction") {
                typeDiscount -= ((newShoppingCart[action.id].price * newShoppingCart[action.id].quantity) * (15 / 100))
            }
            var removedItemsCount = newShoppingCart[action.id].quantity;
            delete newShoppingCart[action.id];
            return {
                ...state,
                shoppingCart: newShoppingCart,
                totalItemsInCart: state.totalItemsInCart - removedItemsCount,
                itemsTotalPrice: itemsTotalPrice,
                discount: discount,
                typeDiscount: typeDiscount,
                finalPrice: finalPrice
            };
    }
    return state;
};

export default reducer;
