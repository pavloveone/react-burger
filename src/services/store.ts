import { legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from './index';
import thunk from 'redux-thunk';


const composeEnhancers = composeWithDevTools({});

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);