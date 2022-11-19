import { SHOW_DETAILS, CLOSE_DETAILS } from '../actions/ingredients-details';


const initialState = {
    isVisible: false,
    currentItem: null
};

export const ingredientsDetailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_DETAILS: {
            return {
                ...state,
                isVisible: true,
                currentItem: action.payload
            }
        }
        case CLOSE_DETAILS: {
            return {
                ...state,
                isVisible: false,
                currentItem: null
            }
        }
        default: {
            return state
        }
    }
}