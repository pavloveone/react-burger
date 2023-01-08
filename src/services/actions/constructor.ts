
import { v4 as uuidv4 } from 'uuid';
import { AppDispatch } from '..';
import { TIngredient } from '../../utils/types';

export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';
export const ADD_BUN: 'ADD_BUN' = 'ADD_BUN';
export const REORDER_INGREDIENT: 'REORDER_INGREDIENT' = 'REORDER_INGREDIENT';
export const RESET_CONSTRUCTOR: 'RESET_CONSTRUCTOR' = 'RESET_CONSTRUCTOR';

export interface IAddIngredientAction {
    readonly type: typeof ADD_INGREDIENT;
    readonly ingredients: TIngredient;
}
export interface IDeleteIngredientAction {
    readonly type: typeof DELETE_INGREDIENT;
    readonly id: number | undefined;
}
export interface IAddBunAction {
    readonly type: typeof ADD_BUN;
    readonly bun: TIngredient;
}
export interface IReorderIngredientAction {
    readonly type: typeof REORDER_INGREDIENT;
    readonly hoverIndex: number;
    readonly dragIndex: number;
}
export interface IResetConstructorAction {
    readonly type: typeof RESET_CONSTRUCTOR;
}

export type TConstructorActions = | IAddIngredientAction | IDeleteIngredientAction | IAddBunAction 
| IReorderIngredientAction | IResetConstructorAction;


export const addBun = (item: TIngredient, dispatch: AppDispatch) => {
    dispatch({ 
        type: item.type === 'bun' ? ADD_BUN : ADD_INGREDIENT,
        bun: {
            ...item, 
            id: uuidv4()
        },
        ingredients: {
            ...item, 
            id: uuidv4()
        }
    })
}