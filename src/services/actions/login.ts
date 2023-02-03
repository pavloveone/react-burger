import { checkReponse } from '../../utils/variables';
import { getUser } from './profile';
import { login, logout, refreshToken } from '../../utils/api';
import { setCookie, deleteCookie, getCookie } from '../../utils/cookies';
import { TRegisterResponse, TUser } from '../../utils/types';
import { AppDispatch, AppThunk } from '..';

export const GET_LOGIN_REQUEST: 'GET_LOGIN_REQUEST' = 'GET_LOGIN_REQUEST';
export const GET_LOGIN_SUCCESS: 'GET_LOGIN_SUCCESS' = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_ERROR: 'GET_LOGIN_ERROR' = 'GET_LOGIN_ERROR';
export const LOGOUT: 'LOGOUT' = 'LOGOUT';
export const AUTH_CHECKED: 'AUTH_CHECKED' = 'AUTH_CHECKED';

export interface IGetLoginRequestAction {
    readonly type: typeof GET_LOGIN_REQUEST;
}
export interface IGetLoginSuccessAction {
    readonly type: typeof GET_LOGIN_SUCCESS;
    readonly userData: TRegisterResponse;
}
export interface IGetLoginErrorAction {
    readonly type: typeof GET_LOGIN_ERROR;
}
export interface ILogoutAction {
    readonly type: typeof LOGOUT;
}
export interface IAuthCheckedAction {
    readonly type: typeof AUTH_CHECKED;
}

export type TLoginActions = | IGetLoginRequestAction | IGetLoginSuccessAction | IGetLoginErrorAction | ILogoutAction
| IAuthCheckedAction;

export const authorization = (email: TRegisterResponse, password: TRegisterResponse): AppThunk => (dispatch: AppDispatch) => {
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
    .then(res => checkReponse<TRegisterResponse>(res))
    .then((res) =>  {
        if(res.success) {
            setCookie('token', res.accessToken)
            localStorage.setItem('token', res.refreshToken);     
        }
        dispatch({
            type: GET_LOGIN_SUCCESS,
            userData: res
        })
    })
    .catch(err => dispatch({
        type: GET_LOGIN_ERROR,
    }));
}

export const logOut = (dispatch: AppDispatch) => {
    fetch(logout, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            'token': localStorage.token
        })
    })
    .then(res => checkReponse<TRegisterResponse>(res))
    .then((res) =>  {
        if(res.success) {
            deleteCookie('token')   
            dispatch({
                type: LOGOUT,
            })
        }
    })
    .catch(err => console.log(err));
}

export const checkUserAuth = (): AppThunk => (dispatch: AppDispatch) => {
    if (getCookie('token')) {
        dispatch(getUser())
    } 
}