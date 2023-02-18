import { TUser } from "../../utils/types";
import {
	GET_RESET_PASSWORD_ERROR,
	GET_RESET_PASSWORD_SUCCESS,
	GET_RESET_PASSWORD_REQUEST,
	TResetPasswordActions
} from "../actions/reset-password";

type TResetPasswordListState = {
	hasError: boolean;
	isLoading: boolean;
	success: boolean;
	userData: TUser;
}

export const initialState: TResetPasswordListState = {
    hasError: false,
    isLoading: false,
	success: false,
    userData: {}
}

export const resetPasswordReducer = (state = initialState, action: TResetPasswordActions) => {
    switch(action.type) {
		case GET_RESET_PASSWORD_REQUEST: {
			return {
				...state,
				isLoading: true,
				hasError: false
			}
		}
		case GET_RESET_PASSWORD_SUCCESS: {
			return {
				...state,
				isLoading: false,
				hasError: false,
				success: true,
				userData: action.userData
			}
		}
		case GET_RESET_PASSWORD_ERROR: {
			return {
				...state,
				isLoading: false,
				success: false,
				hasError: true
			}
		}
		default: {
			return state
		}
    }
}