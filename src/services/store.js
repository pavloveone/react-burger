import { legacy_createStore as createStore, applyMiddleware, compose} from 'redux'
import { rootReducer } from './index';
import thunk from 'redux-thunk';


const composeEnhancers =
  typeof window === "object" && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE
    ? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);