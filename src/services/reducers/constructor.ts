import { 
    ADD_INGREDIENT, 
    DELETE_INGREDIENT, 
    ADD_BUN, 
    REORDER_INGREDIENT, 
    RESET_CONSTRUCTOR, 
    TConstructorActions
 } from "../actions/constructor";
import { TIngredient } from '../../utils/types';

type TConstructorListState = {
    ingredients: ReadonlyArray<TIngredient>;
    bun: ReadonlyArray<TIngredient>;
}


export const initialState: TConstructorListState = {
    ingredients: [],
    bun: []
};

export const constructorReducer = (state = initialState, action: TConstructorActions) => {
    switch(action.type) {
        case ADD_INGREDIENT: {
            return {
                ...state,
                ingredients: [...state.ingredients, action.ingredients],
               
            }
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                ingredients: [...state.ingredients.filter((item) => item.id !== action.id)]
            }
        }
        case ADD_BUN: {
            return {
                ...state,
                bun: [action.bun],
            }
        }
        case REORDER_INGREDIENT: {
            const data = [...state.ingredients];
            data.splice(action.hoverIndex, 0, data.splice(action.dragIndex, 1)[0]);
            return {
                ...state,
                ingredients: data
            }
        }
        case RESET_CONSTRUCTOR: {
            return {
                ingredients: [],
                bun: []
            }
        }
        default: {
            return state
        }
    }
}