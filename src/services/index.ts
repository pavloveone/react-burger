import { ingredientsReducer } from './reducers/ingredients';
import { constructorReducer } from './reducers/constructor';
import { orderDetailsReducer } from './reducers/order-details';
import { registrationReducer } from './reducers/register';
import { forgotPasswordReducer } from './reducers/forgot-password';
import { resetPasswordReducer } from './reducers/reset-password';
import { loginReducer } from './reducers/login';
import { profileReducer } from './reducers/profile';
import { combineReducers } from 'redux';
import { TConstructorActions } from './actions/constructor';
import { TForgotPasswordActions } from './actions/forgot-password';
import { TIngredientsActions } from './actions/ingredients';
import { TLoginActions } from './actions/login';
import { TOrderDetailsActions } from './actions/order-details';
import { TProfileActions } from './actions/profile';
import { TRegisterActions } from './actions/register';
import { TResetPasswordActions } from './actions/reset-password';
import { ThunkAction } from 'redux-thunk';

export type RootState = ReturnType<typeof rootReducer>

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

type TApplicationActions = 
| TConstructorActions | TForgotPasswordActions | TIngredientsActions 
| TLoginActions | TOrderDetailsActions | TProfileActions | TRegisterActions | TResetPasswordActions;

export type AppThunk<TReturnType = void> = ThunkAction<TReturnType, RootState, unknown, TApplicationActions>;

export type AppDispatch<TReturnType = void> = (
    action: TApplicationActions | AppThunk<TReturnType>
) => TReturnType; 
