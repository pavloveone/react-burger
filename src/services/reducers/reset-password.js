import { GET_RESET_PASSWORD_ERROR, GET_RESET_PASSWORD_SUCCESS, GET_RESET_PASSWORD_REQUEST } from "../actions/reset-password";

const initialState = {
    hasError: false,
    isLoading: false,
    userData: {}
}

export const resetPasswordReducer = (state = initialState, action) => {
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
				userData: action.payload
			}
		}
		case GET_RESET_PASSWORD_ERROR: {
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