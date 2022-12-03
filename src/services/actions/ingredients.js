import { checkReponse } from "../../utils/variables";
import { URL } from '../../utils/api';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';

export const fetchIngredients = () => (dispatch) => {
    dispatch({type: GET_INGREDIENTS_REQUEST});
    fetch(`${URL}/ingredients`)
    .then(checkReponse)
    .then(res => dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        payload: res.data,
    }))
    .catch(error => dispatch({
        type: GET_INGREDIENTS_ERROR
    }));
}
