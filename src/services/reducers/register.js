import { GET_REGISTRATION_SUCCESS, GET_REGISTRATION_REQUEST, GET_REGISTRATION_ERROR } from "../actions/register";

const initialState = {
    isLoading: false,
	hasError: false,
    userData: {}
};

export const registrationReducer = (state = initialState, action) => {
    switch(action.type) {
		case GET_REGISTRATION_REQUEST: {
			return {
				...state,
				isLoading: true,
				hasError: false
			}
		}
		case GET_REGISTRATION_SUCCESS: {
			return {
				...state,
				isLoading: false,
				hasError: false,
				userData: action.payload
			}
		}
		case GET_REGISTRATION_ERROR: {
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