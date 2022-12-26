import { checkReponse } from '../../utils/variables';
import { getUser } from './profile';
import { login, logout } from '../../utils/api';
import { setCookie, deleteCookie, getCookie } from '../../utils/cookies';
import { TUser } from '../../utils/types';

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
    readonly userData: TUser;
}
export interface IGetLoginErrorAction {
    readonly type: typeof GET_LOGIN_ERROR;
    readonly userData: TUser;
}
export interface ILogoutAction {
    readonly type: typeof LOGOUT;
}
export interface IAuthCheckedAction {
    readonly type: typeof AUTH_CHECKED;
}

export type TLoginActions = | IGetLoginRequestAction | IGetLoginSuccessAction | IGetLoginErrorAction | ILogoutAction
| IAuthCheckedAction;

export const authorization = (email: string, password: string) => (dispatch: any) => {
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
    .then((res: any) =>  {
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
        userData: err
    }));
}

export const logOut = (dispatch: any) => {
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
    .then((res: any) =>  {
        if(res.success) {
            deleteCookie('token')   
            dispatch({
                type: LOGOUT,
            })
        }
    })
    .catch(err => console.log(err));
}

export const checkUserAuth = () => (dispatch: any) => {
    if (getCookie('token')) {
        dispatch(getUser())
    }
}