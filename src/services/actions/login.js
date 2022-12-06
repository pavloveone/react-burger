import { checkReponse } from '../../utils/variables';
import { getUser } from './profile';
import { login, logout } from '../../utils/api';
import { setCookie, deleteCookie, getCookie } from '../../utils/cookies';

export const GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST';
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_ERROR = 'GET_LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const AUTH_CHECKED = 'AUTH_CHECKED';

export const authorization = (email, password) => (dispatch) => {
    dispatch({ type: GET_LOGIN_REQUEST });
    fetch(login, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            'email': email,
            'password': password
        })
    })
    .then(checkReponse)
    .then(res =>  {
        if(res.success) {
            setCookie('token', res.accessToken)
            localStorage.setItem('token', res.refreshToken);     
        }
        dispatch({
            type: GET_LOGIN_SUCCESS,
            payload: res
        })
    })
    .catch(err => dispatch({
        type: GET_LOGIN_ERROR,
        payload: err
    }));
}

export const logOut = (dispatch) => {
    fetch(logout, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            'token': localStorage.token
        })
    })
    .then(checkReponse)
    .then(res =>  {
        if(res.success) {
            deleteCookie('token')   
            dispatch({
                type: LOGOUT,
            })
        }
    })
    .catch(err => console.log(err));
}

export const checkUserAuth = () => (dispatch) => {
    if (getCookie('token')) {
        dispatch(getUser())
    }
}