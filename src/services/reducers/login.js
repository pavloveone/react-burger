import { GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_LOGIN_ERROR, LOGOUT, AUTH_CHECKED } from "../actions/login";

const initialState = {
    isLoading: false,
    hasError: false,
    isAuth: false,
    userData: {}
}


export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true,
                hasError: false
            }
        }
        case GET_LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                userData: action.payload,
                isAuth: true
            }
        }
        case GET_LOGIN_ERROR: {
            return {
                ...state,
                hasError: true,
                isLoading: false,
                userData: action.payload
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isAuth: false
            }
        }
        case AUTH_CHECKED: {
            return {
                ...state,
                isAuth: true
            }
        }
        default: {
            return state
        };
    }
}