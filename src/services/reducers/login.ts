import { TUser } from "../../utils/types";
import { 
    GET_LOGIN_REQUEST,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_ERROR,
    LOGOUT,
    AUTH_CHECKED,
    TLoginActions 
} from "../actions/login";

type TLoginListState = {
    isLoading: boolean;
    hasError: boolean;
    isAuth: boolean;
    userData: TUser;
}

const initialState: TLoginListState = {
    isLoading: false,
    hasError: false,
    isAuth: false,
    userData: {}
}


export const loginReducer = (state = initialState, action: TLoginActions) => {
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
                userData: action.userData,
                isAuth: true
            }
        }
        case GET_LOGIN_ERROR: {
            return {
                ...state,
                hasError: true,
                isLoading: false,
                userData: action.userData
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