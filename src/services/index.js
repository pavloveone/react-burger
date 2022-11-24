import { ingredientsReducer } from './reducers/ingredients';
import { constructorReducer } from './reducers/constructor';
import { ingredientsDetailsReducer } from './reducers/ingredients-details';
import { orderDetailsReducer } from './reducers/order-details';
import { registrationReducer } from './reducers/register';
import { forgotPasswordReducer } from './reducers/forgot-password';
import { resetPasswordReducer } from './reducers/reset-password';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    constructorIngredients: constructorReducer,
    ingredientsDetails: ingredientsDetailsReducer,
    orderDetails: orderDetailsReducer,
    registration: registrationReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer
});