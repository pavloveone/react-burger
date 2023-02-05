import { TUser } from "../../utils/types";
import { 
	GET_FORGOT_PASSWORD_ERROR,
	GET_FORGOT_PASSWORD_SUCCESS,
	GET_FORGOT_PASSWORD_REQUEST,
	TForgotPasswordActions
} from "../actions/forgot-password";

type TForgotPasswordListState = {
	hasError: boolean;
	isLoading: boolean;
	hasUser: boolean;
	userData: TUser;
}

const initialState: TForgotPasswordListState = {
    hasError: false,
    isLoading: false,
	hasUser: false,
    userData: {}
}

export const forgotPasswordReducer = (state = initialState, action: TForgotPasswordActions) => {
    switch(action.type) {
		case GET_FORGOT_PASSWORD_REQUEST: {
			return {
				...state,
				isLoading: true,
				hasError: false
			}
		}
		case GET_FORGOT_PASSWORD_SUCCESS: {
			return {
				...state,
				isLoading: false,
				hasUser: true,
				userData: action.userData
			}
		}
		case GET_FORGOT_PASSWORD_ERROR: {
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