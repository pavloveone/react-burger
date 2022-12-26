import { ingredientsReducer } from './reducers/ingredients';
import { constructorReducer } from './reducers/constructor';
import { orderDetailsReducer } from './reducers/order-details';
import { registrationReducer } from './reducers/register';
import { forgotPasswordReducer } from './reducers/forgot-password';
import { resetPasswordReducer } from './reducers/reset-password';
import { loginReducer } from './reducers/login';
import { profileReducer } from './reducers/profile';
import { combineReducers } from 'redux';
import { store } from './store';
import { TConstructorActions } from './actions/constructor';
import { TForgotPasswordActions } from './actions/forgot-password';
import { TIngredientsActions } from './actions/ingredients';
import { TLoginActions } from './actions/login';
import { TOrderDetailsActions } from './actions/order-details';
import { TProfileActions } from './actions/profile';
import { TRegisterActions } from './actions/register';
import { TResetPasswordActions } from './actions/reset-password';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator, Dispatch } from 'redux';

export type RootState = ReturnType<typeof store.getState>

type TApplicationActions = 
| TConstructorActions | TForgotPasswordActions | TIngredientsActions 
| TLoginActions | TOrderDetailsActions | TProfileActions | TRegisterActions | TResetPasswordActions;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>; 

export type AppDispatch = Dispatch<TApplicationActions>; 

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