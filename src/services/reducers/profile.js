import { 
    GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_ERROR, 
    GET_UPDATE_PROFILE_REQUEST, GET_UPDATE_PROFILE_SUCCESS, GET_UPDATE_PROFILE_ERR0R
 } from '../actions/profile';

const initialState = {
    isLoading: false,
    hasError: false,
    userProfile: {},
    
}

export const profileReducer = (state = initialState, action) => {
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
                userProfile: action.payload
            }
        }
        case GET_PROFILE_ERROR: {
            return {
                ...state,
                hasError: true,
                userProfile: action.payload
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
                userProfile: action.payload
            }
        }
        case GET_UPDATE_PROFILE_ERR0R: {
            return {
                ...state,
                hasError: true,
                userProfile: action.payload
            }
        }
        default: {
            return state
        };
    }
}