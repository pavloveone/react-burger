import { checkReponse } from "../../utils/variables";

export const GET_RESET_PASSWORD_REQUEST = 'GET_RESET_PASSWORD_REQUEST';
export const GET_RESET_PASSWORD_SUCCESS = 'GET_RESET_PASSWORD_SUCCESS';
export const GET_RESET_PASSWORD_ERROR = 'GET_RESET_PASSWORD_ERROR';

export const resetPassword = (email, token) => (dispatch) => {

    dispatch({ type: GET_RESET_PASSWORD_REQUEST });
        fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            'email': email,
            'token': token
        })
    })
    .then(checkReponse)
    .then(res => {
        console.log(res);
        return dispatch({
        type: GET_RESET_PASSWORD_SUCCESS,
        payload: res,
    })})
    .catch(err => dispatch({
        type: GET_RESET_PASSWORD_ERROR
    }));
}