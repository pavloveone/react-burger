import { checkReponse } from "../../utils/variables";
import { URL } from "../../utils/api";
import { TIngredient } from "../../utils/types";

export const SHOW_ORDER: 'SHOW_ORDER'= 'SHOW_ORDER';
export const CLOSE_ORDER: 'CLOSE_ORDER' = 'CLOSE_ORDER';
export const GET_ORDER_REQUEST: 'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR: 'GET_ORDER_ERROR' = 'GET_ORDER_ERROR';

export interface IShowOrderAction{
    readonly type: typeof SHOW_ORDER;
}
export interface ICloseOrderAction {
    readonly type: typeof CLOSE_ORDER;
}
export interface IGetOrderRequestAction {
    readonly type: typeof GET_ORDER_REQUEST;
}
export interface IGetOrderSuccessAction {
    readonly type: typeof GET_ORDER_SUCCESS;
    readonly orderNumber: number;
}
export interface IGetOrderErrorAction {
    readonly type: typeof GET_ORDER_ERROR;
}

export type TOrderDetailsActions = | IShowOrderAction | ICloseOrderAction | IGetOrderRequestAction | IGetOrderSuccessAction
| IGetOrderErrorAction;

export const getOrder = (bun: TIngredient[], ingredients: TIngredient[]) =>(dispatch: any) => {

    bun = bun.filter( Boolean );

    const array = [...ingredients];
    array.unshift(...bun);
    array.push(...bun);

        const ingredientsId = array.map((item) => item._id);
        dispatch({type: GET_ORDER_REQUEST});
        fetch(`${URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                ingredients: ingredientsId
            })
        })
        .then(checkReponse)
        .then((res: any) => {
            console.log(res);
             return dispatch({
            type: GET_ORDER_SUCCESS,
            payload: res.order.number
        })})
        .catch(err => dispatch({
            type: GET_ORDER_ERROR
        }));
}