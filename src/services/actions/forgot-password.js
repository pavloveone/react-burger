import { checkReponse } from "../../utils/variables";

export const GET_FORGOT_PASSWORD_REQUEST = 'GET_FORGOT_PASSWORD_REQUEST';
export const GET_FORGOT_PASSWORD_SUCCESS = 'GET_FORGOT_PASSWORD_SUCCESS';
export const GET_FORGOT_PASSWORD_ERROR = 'GET_FORGOT_PASSWORD_ERROR';

export const forgotPassword = (email) => (dispatch) => {

    dispatch({ type: GET_FORGOT_PASSWORD_REQUEST });
        fetch('https://norma.nomoreparties.space/api/password-reset', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            'email': email
        })
    })
    .then(checkReponse)
    .then(res => {
        if(res.success) {
            console.log(res);
            dispatch({
                type: GET_FORGOT_PASSWORD_SUCCESS,
                payload: res,
            })
        }
})
    .catch(err => {
        console.log(err);
        dispatch({
        type: GET_FORGOT_PASSWORD_ERROR
    })});
}