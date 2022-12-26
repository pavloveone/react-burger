import { 
    GET_INGREDIENTS_ERROR, 
    GET_INGREDIENTS_REQUEST, 
    GET_INGREDIENTS_SUCCESS, 
    TIngredientsActions
} from "../actions/ingredients";
import { TIngredient } from '../../utils/types'

type TIngredientsListState = {
    ingredients: ReadonlyArray<TIngredient>;
    isLoading: boolean;
    hasError: boolean;
}

const initialState: TIngredientsListState = {
    ingredients: [],
    isLoading: false,
    hasError: false
};


export const ingredientsReducer = (state = initialState, action: TIngredientsActions) => {
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
                ingredients: action.ingredients
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