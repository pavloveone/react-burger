import { TUser } from '../../utils/types';
import { 
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_ERROR, 
    GET_UPDATE_PROFILE_REQUEST,
    GET_UPDATE_PROFILE_SUCCESS,
    GET_UPDATE_PROFILE_ERR0R,
    TProfileActions
} from '../actions/profile';

type TProfileListState = {
    isLoading: boolean;
    hasError: boolean;
    userProfile: TUser;
}

export const initialState: TProfileListState = {
    isLoading: false,
    hasError: false,
    userProfile: {},
}

export const profileReducer = (state = initialState, action: TProfileActions) => {
    switch(action.type) {
        case GET_PROFILE_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_PROFILE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                userProfile: action.userProfile
            }
        }
        case GET_PROFILE_ERROR: {
            return {
                ...state,
                hasError: true,
            }
        }
        case GET_UPDATE_PROFILE_REQUEST: {
            return {
                ...state,
                isLoading: true,
                hasError: false
            }
        }
        case GET_UPDATE_PROFILE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                userProfile: action.userProfile
            }
        }
        case GET_UPDATE_PROFILE_ERR0R: {
            return {
                ...state,
                hasError: true,
            }
        }
        default: {
            return state
        };
    }
}