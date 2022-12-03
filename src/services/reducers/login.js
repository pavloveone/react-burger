import { GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_LOGIN_ERROR, GET_LOGOUT } from "../actions/login";

const initialState = {
    isLoading: false,
    hasError: false,
    isLogout: false,
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
                hasError: false,
                userData: action.payload
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
        case GET_LOGOUT: {
            return {
                ...state,
                hasError: false,
                isLoading: false,
                userData: {},
                isLogout: true
            }
        }
        default: {
            return state
        };
    }
}