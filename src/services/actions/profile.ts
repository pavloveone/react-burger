import { checkReponse } from '../../utils/variables';
import { refreshToken, user } from '../../utils/api';
import { getCookie, setCookie } from '../../utils/cookies';
import { AUTH_CHECKED } from './login';
import { TRegisterResponse, TUser } from '../../utils/types';
import { AppDispatch, AppThunk } from '..';

export const GET_PROFILE_REQUEST: 'GET_PROFILE_REQUEST' = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS' = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_ERROR: 'GET_PROFILE_ERROR' = 'GET_PROFILE_ERROR';
export const GET_UPDATE_PROFILE_REQUEST: 'GET_UPDATE_PROFILE_REQUEST' = 'GET_UPDATE_PROFILE_REQUEST';
export const GET_UPDATE_PROFILE_SUCCESS: 'GET_UPDATE_PROFILE_SUCCESS' = 'GET_UPDATE_PROFILE_SUCCESS';
export const GET_UPDATE_PROFILE_ERR0R: 'GET_UPDATE_PROFILE_ERR0R' = 'GET_UPDATE_PROFILE_ERR0R';

export interface IGetProfileRequestAction {
    readonly type: typeof GET_PROFILE_REQUEST;
}
export interface IGetProfileSuccessAction {
    readonly type: typeof GET_PROFILE_SUCCESS;
    readonly userProfile: TUser;
}
export interface IGetProfileErrorAction {
    readonly type: typeof GET_PROFILE_ERROR;
}
export interface IGetUpdateProfileRequestAction {
    readonly type: typeof GET_UPDATE_PROFILE_REQUEST;
}
export interface IGetUpdateProfileSuccessAction {
    readonly type: typeof GET_UPDATE_PROFILE_SUCCESS;
    readonly userProfile: TUser;
}
export interface IGetUpdateProfileErrorAction {
    readonly type: typeof GET_UPDATE_PROFILE_ERR0R;
}

export type TProfileActions = | IGetProfileRequestAction | IGetProfileSuccessAction | IGetProfileErrorAction
 | IGetUpdateProfileRequestAction | IGetUpdateProfileSuccessAction | IGetUpdateProfileErrorAction;

export const getUser = (): AppThunk => (dispatch: AppDispatch) => {
    dispatch({ type: GET_PROFILE_REQUEST });
    fetch(user, {
        method: 'GET',
        //@ts-ignore
        headers: {
            'Content-Type': "application/json;charset=utf-8",
            'authorization': getCookie('token')
        }
    })
    .then((res) => checkReponse<TUser>(res))
    .then(res =>  {
        dispatch({
            type: GET_PROFILE_SUCCESS,
            userProfile: res
        })})
    .then(res => {
        dispatch({
            type: AUTH_CHECKED
        })
    })
    .catch((err) => {
        if(err.message === 'jwt expired') {
            fetch(refreshToken, {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json;charset=utf-8"
                },
                body: JSON.stringify({
                    'token': localStorage.token
                })
            })
            .then((res) => checkReponse<TRegisterResponse>(res))
            .then((res) => {
                if(res.success) {
                    setCookie('token', res.accessToken, undefined)
                    localStorage.setItem('token', res.refreshToken); 
                }
            })
        } else
            dispatch({
                type: GET_PROFILE_ERROR,
            })
    })
}

export const updateUser = (email: string, username: string) => (dispatch: AppDispatch) => {
    dispatch({ type: GET_UPDATE_PROFILE_REQUEST });
    fetch(user, {
        method: 'PATCH',
        //@ts-ignore
        headers: {
            'Content-Type': "application/json;charset=utf-8",
            'authorization': getCookie('token')
        },
        body: JSON.stringify({
            'email': email,
            'name': username
        })
    })
    .then(res => checkReponse<TUser>(res))
    .then(res =>  {
        dispatch({
            type: GET_UPDATE_PROFILE_SUCCESS,
            userProfile: res
        })})
    .catch(err => dispatch({
        type: GET_UPDATE_PROFILE_ERR0R,
    }));
}