import { TUser } from "../../utils/types";
import {
	GET_REGISTRATION_SUCCESS,
	GET_REGISTRATION_REQUEST,
	GET_REGISTRATION_ERROR,
	TRegisterActions
} from "../actions/register";

type TRegisterListState = {
	isLoading: boolean;
	hasError: Boolean;
	userData: TUser;
}

export const initialState: TRegisterListState = {
    isLoading: false,
	hasError: false,
    userData: {}
};

export const registrationReducer = (state = initialState, action: TRegisterActions) => {
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
				userData: action.userData
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