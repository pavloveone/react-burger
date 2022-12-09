import { checkReponse } from "../../utils/variables";
import { register } from "../../utils/api";

export const GET_REGISTRATION_REQUEST = 'GET_REGISTRATION_REQUEST';
export const GET_REGISTRATION_SUCCESS = 'GET_REGISTRATION__SUCCESS';
export const GET_REGISTRATION_ERROR = 'GET_REGISTRATION_ERROR';

export const registration = (email, password, username) => (dispatch) => {

    dispatch({ type: GET_REGISTRATION_REQUEST });
        fetch(register, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            'email': email,
            'password': password,
            'name': username
        })
    })
    .then(checkReponse)
    .then(res => dispatch({
        type: GET_REGISTRATION_SUCCESS,
        payload: res
    }))
    .catch(err => dispatch({
        type: GET_REGISTRATION_ERROR
    }));
}