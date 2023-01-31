import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'; 
import { feedMiddleware, ordersMiddleware, rootReducer } from './index';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({});

const enhancer = composeEnhancers(applyMiddleware(thunk, feedMiddleware, ordersMiddleware));

export const store = createStore(rootReducer, enhancer);