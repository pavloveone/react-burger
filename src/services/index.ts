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
import { feedReducer } from './reducers/feed';
import { ordersReducer } from './reducers/orders';
import { socketMiddleware } from './middleware/socket-middleware';
import { 
    connect as feedWsConnect,
    disconnect as feedWsDisconnect,
    wsConnecting as feedWsConnecting,
    wsOpen as feedWsOpen, 
    wsClose as feedWsClose, 
    wsMessage as feedWsMessage, 
    wsError as feedWsError,
    TFeedActions,
} from './actions/feed';

import { 
    connect as ordersWsConnect,
    disconnect as ordersWsDisconnect,
    wsConnecting as ordersWsConnecting,
    wsOpen as ordersWsOpen, 
    wsClose as ordersWsClose, 
    wsMessage as ordersWsMessage, 
    wsError as ordersWsError,
    TOrdersActions
} from './actions/orders';

export type RootState = ReturnType<typeof rootReducer>;

export const feedMiddleware = socketMiddleware({
    wsConnect: feedWsConnect,
    wsDisconnect: feedWsDisconnect,
    wsConnecting: feedWsConnecting,
    onOpen: feedWsOpen,
    onClose: feedWsClose,
    onError: feedWsError,
    onMessage: feedWsMessage,
});

export const ordersMiddleware = socketMiddleware({
    wsConnect: ordersWsConnect,
    wsDisconnect: ordersWsDisconnect,
    wsConnecting: ordersWsConnecting,
    onOpen: ordersWsOpen,
    onClose: ordersWsClose,
    onError: ordersWsError,
    onMessage: ordersWsMessage,
});

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    constructorIngredients: constructorReducer,
    orderDetails: orderDetailsReducer,
    registration: registrationReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    login: loginReducer,
    profile: profileReducer,
    feed: feedReducer,
    orders: ordersReducer,
});

type TApplicationActions = 
| TConstructorActions | TForgotPasswordActions | TIngredientsActions 
| TLoginActions | TOrderDetailsActions | TProfileActions | TRegisterActions | TResetPasswordActions | TFeedActions | TOrdersActions;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;

export type AppDispatch<TReturnType = void> = (
    action: TApplicationActions | AppThunk<TReturnType>
) => TReturnType; 
