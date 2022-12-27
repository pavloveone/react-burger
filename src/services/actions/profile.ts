import { checkReponse } from '../../utils/variables';
import { user } from '../../utils/api';
import { getCookie } from '../../utils/cookies';
import { AUTH_CHECKED } from './login';
import { TResponse, TUser } from '../../utils/types';
import { AppDispatch } from '..';

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

export const getUser = () => (dispatch: AppDispatch) => {
    dispatch({ type: GET_PROFILE_REQUEST });
    fetch(user, {
        method: 'GET',
        //@ts-ignore
        headers: {
            'Content-Type': "application/json;charset=utf-8",
            'authorization': getCookie('token')
        }
    })
    .then(res => checkReponse<TUser>(res))
    .then(res =>  {
        dispatch({
            type: GET_PROFILE_SUCCESS,
            userProfile: res
        })})
    .catch(err => dispatch({
        type: GET_PROFILE_ERROR
    }))
    .finally(() => {
        dispatch({
            type: AUTH_CHECKED,
        })
    });
}

export const updateUser = (email: TUser, username: TUser) => (dispatch: AppDispatch) => {
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
        userProfile: err
    }));
}