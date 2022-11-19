import { checkReponse } from "../../utils/variables";

export const SHOW_ORDER = 'SHOW_ORDER';
export const CLOSE_ORDER = 'CLOSE_ORDER';
export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = 'GET_ORDER_ERROR';

export const getOrder = (bun, ingredients) =>(dispatch) => {

    bun = bun.filter( Boolean )
    const array = [...bun, ...ingredients];

        const ingredientsId = array.map((item) => item._id);
        dispatch({type: GET_ORDER_REQUEST});
        fetch('https://norma.nomoreparties.space/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                ingredients: ingredientsId
            })
        })
        .then(checkReponse)
        .then(res => {
            console.log(res);
             return dispatch({
            type: GET_ORDER_SUCCESS,
            payload: res.order.number
        })})
        .catch(err => dispatch({
            type: GET_ORDER_ERROR
        }));
}