import { burgerApiUrl, checkReponse } from "../../utils/variables";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';

export const fetchIngredients = () => (dispatch) => {
    dispatch({type: GET_INGREDIENTS_REQUEST});
    fetch(`${burgerApiUrl}/ingredients`)
    .then(checkReponse)
    .then(res => dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        payload: res.data,
    }))
    .catch(error => dispatch({
        type: GET_INGREDIENTS_ERROR
    }));
}
