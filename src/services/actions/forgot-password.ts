import { checkReponse } from "../../utils/variables";
import { URL } from '../../utils/api';
import { TUser, TResponse } from "../../utils/types";
import { AppDispatch } from "..";


export const GET_FORGOT_PASSWORD_REQUEST: 'GET_FORGOT_PASSWORD_REQUEST' = 'GET_FORGOT_PASSWORD_REQUEST';
export const GET_FORGOT_PASSWORD_SUCCESS: 'GET_FORGOT_PASSWORD_SUCCESS' = 'GET_FORGOT_PASSWORD_SUCCESS';
export const GET_FORGOT_PASSWORD_ERROR: 'GET_FORGOT_PASSWORD_ERROR' = 'GET_FORGOT_PASSWORD_ERROR';

export interface IGetForgotPasswordRequestAction {
    readonly type: typeof GET_FORGOT_PASSWORD_REQUEST;
}
export interface IGetForgotPasswordSuccessAction {
    readonly type: typeof GET_FORGOT_PASSWORD_SUCCESS;
    readonly userData: TUser;
}
export interface IGetForgotPasswordErrorAction {
    readonly type: typeof GET_FORGOT_PASSWORD_ERROR;
}

export type TForgotPasswordActions = 
| IGetForgotPasswordRequestAction | IGetForgotPasswordSuccessAction | IGetForgotPasswordErrorAction;

export const forgotPassword = (email: string) => (dispatch: AppDispatch) => {

    dispatch({ type: GET_FORGOT_PASSWORD_REQUEST });
        fetch(`${URL}/password-reset`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            'email': email
        })
    })
    .then(res => checkReponse<TResponse>(res))
    .then((res) => {
        if(res.success) {
            dispatch({
                type: GET_FORGOT_PASSWORD_SUCCESS,
                userData: res,
            })
        }
})
    .catch(err => {
        dispatch({
        type: GET_FORGOT_PASSWORD_ERROR
    })});
}