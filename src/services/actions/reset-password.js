import { checkReponse } from "../../utils/variables";

export const GET_RESET_PASSWORD_REQUEST = 'GET_RESET_PASSWORD_REQUEST';
export const GET_RESET_PASSWORD_SUCCESS = 'GET_RESET_PASSWORD_SUCCESS';
export const GET_RESET_PASSWORD_ERROR = 'GET_RESET_PASSWORD_ERROR';

export const resetPassword = (password, token) => (dispatch) => {

    dispatch({ type: GET_RESET_PASSWORD_REQUEST });
        fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            'password': password,
            'token': token
        })
    })
    .then(checkReponse)
    .then(res => {
        console.log(res);
        if(res.success) {
            dispatch({
                type: GET_RESET_PASSWORD_SUCCESS,
                payload: res,
            })
        }
})
    .catch(err => {
        console.log(err);
        dispatch({
        type: GET_RESET_PASSWORD_ERROR
    })});
}