import { GET_INGREDIENTS_ERROR, 
    GET_INGREDIENTS_REQUEST, 
    GET_INGREDIENTS_SUCCESS } from "../actions/ingredients";


const initialState = {
    ingredients: [],
    isLoading: false,
    hasError: false
};


export const ingredientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                hasError: false,
                ingredients: []
            };
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                ingredients: action.payload
            }
        }
        case GET_INGREDIENTS_ERROR: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
                ingredients: []
            }
        } default: {
            return state
        }
    }
}