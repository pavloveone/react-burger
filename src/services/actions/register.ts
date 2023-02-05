import { checkReponse } from "../../utils/variables";
import { register } from "../../utils/api";
import { TUser, TRegisterResponse } from "../../utils/types";
import { AppDispatch, AppThunk } from "..";

export const GET_REGISTRATION_REQUEST: 'GET_REGISTRATION_REQUEST' = 'GET_REGISTRATION_REQUEST';
export const GET_REGISTRATION_SUCCESS: 'GET_REGISTRATION_SUCCESS'  = 'GET_REGISTRATION_SUCCESS';
export const GET_REGISTRATION_ERROR: 'GET_REGISTRATION_ERROR' = 'GET_REGISTRATION_ERROR';

export interface IGetRegistrationRequestAction {
    readonly type: typeof GET_REGISTRATION_REQUEST;
}
export interface IGetRegistrationSuccessAction {
    readonly type: typeof GET_REGISTRATION_SUCCESS;
    readonly userData: TUser;
}
export interface IGetRegistrationErrorAction {
    readonly type: typeof GET_REGISTRATION_ERROR;
}

export type TRegisterActions = | IGetRegistrationRequestAction | IGetRegistrationSuccessAction | IGetRegistrationErrorAction;

export const registration = (email: string, password: string, username: string): AppThunk => (dispatch: AppDispatch) => {

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
    .then(res => checkReponse<TRegisterResponse>(res))
    .then(res => dispatch({
        type: GET_REGISTRATION_SUCCESS,
        userData: res
    }))
    .catch(err => dispatch({
        type: GET_REGISTRATION_ERROR
    }));
}