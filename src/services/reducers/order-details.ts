import { 
    SHOW_ORDER,
    CLOSE_ORDER,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_ERROR,
    FETCH_ORDER_NUMBER_ERROR,
    FETCH_ORDER_NUMBER_REQUEST,
    FETCH_ORDER_NUMBER_SUCCESS,
    TOrderDetailsActions
} from '../actions/order-details';

type TOrderDetailsListState = {
    isVisible: boolean;
    isLoading: boolean;
    hasError: boolean;
    orderNumber: number | null;
}

const initialState: TOrderDetailsListState = {
    isVisible: false,
    isLoading: false,
    hasError: false,
    orderNumber: null
};

export const orderDetailsReducer = (state = initialState, action: TOrderDetailsActions) => {
    switch(action.type) {
        case GET_ORDER_REQUEST: {
            return {
                ...state,
                isLoading: true,
                hasError: false
            }
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                orderNumber: action.orderNumber
            }
        }
        case GET_ORDER_ERROR: {
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        }
        case SHOW_ORDER: {
            return {
                ...state,
                isVisible: true
            }
        }
        case CLOSE_ORDER: {
            return {
                ...state,
                isVisible: false
            }
        }
        case FETCH_ORDER_NUMBER_REQUEST: {
            return {
                ...state,
                isLoading: true,
                hasError: false
            }
        }
        case FETCH_ORDER_NUMBER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                orderNumber: action.orderNumber
            }
        }
        case FETCH_ORDER_NUMBER_ERROR: {
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        }
        default: {
            return state
        }
    }
}