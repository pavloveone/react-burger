import { ingredientsReducer } from './reducers/ingredients';
import { constructorReducer } from './reducers/constructor';
import { orderDetailsReducer } from './reducers/order-details';
import { registrationReducer } from './reducers/register';
import { forgotPasswordReducer } from './reducers/forgot-password';
import { resetPasswordReducer } from './reducers/reset-password';
import { loginReducer } from './reducers/login';
import { profileReducer } from './reducers/profile';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    constructorIngredients: constructorReducer,
    orderDetails: orderDetailsReducer,
    registration: registrationReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    login: loginReducer,
    profile: profileReducer
});