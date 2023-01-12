import { checkReponse } from "../../utils/variables";
import { URL } from '../../utils/api';
import { TIngredient } from "../../utils/types";
import { AppDispatch, AppThunk } from "..";
import { TIngredientResponse } from "../../utils/types";

export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR: 'GET_INGREDIENTS_ERROR' = 'GET_INGREDIENTS_ERROR';

export interface IGetIngredientsRequestAction {
    readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export interface IGetIngredientsSuccessAction {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly ingredients: TIngredient[];
}
export interface IGetIngredientsErrorAction {
    readonly type: typeof GET_INGREDIENTS_ERROR;
}

export type TIngredientsActions = | IGetIngredientsRequestAction | IGetIngredientsSuccessAction 
| IGetIngredientsErrorAction;

export const fetchIngredients = (): AppThunk => (dispatch: AppDispatch) => {
    dispatch({type: GET_INGREDIENTS_REQUEST});
    fetch(`${URL}/ingredients`)
    .then(res => checkReponse<TIngredientResponse>(res))
    .then((res) => dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: res.data,
    }))
    .catch(error => dispatch({
        type: GET_INGREDIENTS_ERROR
    }));
}
