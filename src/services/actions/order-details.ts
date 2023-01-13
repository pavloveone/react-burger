import { checkReponse } from "../../utils/variables";
import { URL } from "../../utils/api";
import { TIngredient } from "../../utils/types";
import { AppDispatch, AppThunk } from "..";
import { TOrderResponse } from "../../utils/types";
import { useParams } from 'react-router-dom';

export const SHOW_ORDER: 'SHOW_ORDER'= 'SHOW_ORDER';
export const CLOSE_ORDER: 'CLOSE_ORDER' = 'CLOSE_ORDER';
export const GET_ORDER_REQUEST: 'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR: 'GET_ORDER_ERROR' = 'GET_ORDER_ERROR';
export const FETCH_ORDER_NUMBER_REQUEST : 'FETCH_ORDER_NUMBER_REQUEST' = 'FETCH_ORDER_NUMBER_REQUEST';
export const FETCH_ORDER_NUMBER_SUCCESS : 'FETCH_ORDER_NUMBER_SUCCESS' = 'FETCH_ORDER_NUMBER_SUCCESS';
export const FETCH_ORDER_NUMBER_ERROR : 'FETCH_ORDER_NUMBER_ERROR' = 'FETCH_ORDER_NUMBER_ERROR';

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
export interface IFetchOrderNumberRequestAction {
    readonly type: typeof FETCH_ORDER_NUMBER_REQUEST;
}
export interface IFetchOrderNumberSuccessAction {
    readonly type: typeof FETCH_ORDER_NUMBER_SUCCESS;
    readonly orderNumber: number;
}
export interface IFetchOrderNumberErrorAction {
    readonly type: typeof FETCH_ORDER_NUMBER_ERROR;
}

interface IFeedNumber{
    feedNumber: string;
}

export type TOrderDetailsActions = | IShowOrderAction | ICloseOrderAction | IGetOrderRequestAction | IGetOrderSuccessAction
| IGetOrderErrorAction | IFetchOrderNumberRequestAction | IFetchOrderNumberSuccessAction | IFetchOrderNumberErrorAction;

export const getOrder = (bun: ReadonlyArray<TIngredient>, 
    ingredients: ReadonlyArray<TIngredient>): AppThunk =>(dispatch: AppDispatch) => {

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
    .then(res => checkReponse<TOrderResponse>(res))
    .then((res) => {
         return dispatch({
        type: GET_ORDER_SUCCESS,
        orderNumber: res.order.number
    })})
    .catch(err => dispatch({
        type: GET_ORDER_ERROR
    }));
}

export const fetchOrderNumber = ():AppThunk => (dispatch: AppDispatch) => {
    const { feedNumber } = useParams<IFeedNumber>();
    dispatch({type: FETCH_ORDER_NUMBER_REQUEST});
    fetch(`${URL}/orders/${feedNumber}`)
    .then(res => checkReponse<TOrderResponse>(res))
    .then((res) => dispatch({
        type: FETCH_ORDER_NUMBER_SUCCESS,
        orderNumber: res.order.number
    }))
    .catch(error => dispatch({
        type: FETCH_ORDER_NUMBER_ERROR
    }));
}