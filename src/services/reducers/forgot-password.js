import { GET_FORGOT_PASSWORD_ERROR, GET_FORGOT_PASSWORD_SUCCESS, GET_FORGOT_PASSWORD_REQUEST } from "../actions/forgot-password";

const initialState = {
    hasError: false,
    isLoading: false,
    userData: {}
}

export const forgotPasswordReducer = (state = initialState, action) => {
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
				hasError: false,
				userData: action.payload
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