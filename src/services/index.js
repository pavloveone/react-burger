import { ingredientsReducer } from './reducers/ingredients';
import { constructorReducer } from './reducers/constructor';
import { ingredientsDetailsReducer } from './reducers/ingredients-details';
import { orderDetailsReducer } from './reducers/order-details';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    constructorIngredients: constructorReducer,
    ingredientsDetails: ingredientsDetailsReducer,
    orderDetails: orderDetailsReducer
});