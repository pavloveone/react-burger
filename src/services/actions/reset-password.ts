import { checkReponse } from "../../utils/variables";
import { URL } from "../../utils/api";
import { TResponse, TUser } from "../../utils/types";
import { AppDispatch, AppThunk } from "..";

export const GET_RESET_PASSWORD_REQUEST: 'GET_RESET_PASSWORD_REQUEST' = 'GET_RESET_PASSWORD_REQUEST';
export const GET_RESET_PASSWORD_SUCCESS: 'GET_RESET_PASSWORD_SUCCESS' = 'GET_RESET_PASSWORD_SUCCESS';
export const GET_RESET_PASSWORD_ERROR: 'GET_RESET_PASSWORD_ERROR' = 'GET_RESET_PASSWORD_ERROR';

export interface IGetResetPasswordRequestAction {
    readonly type: typeof GET_RESET_PASSWORD_REQUEST;
}
export interface IGetResetPasswordSuccessAction {
    readonly type: typeof GET_RESET_PASSWORD_SUCCESS;
    readonly userData: TUser;
}
export interface IGetResetPasswordErrorAction {
    readonly type: typeof GET_RESET_PASSWORD_ERROR;
}

export type TResetPasswordActions = 
| IGetResetPasswordRequestAction | IGetResetPasswordSuccessAction | IGetResetPasswordErrorAction;

export const resetPassword = (password: string, token: string): AppThunk => (dispatch: AppDispatch) => {

    dispatch({ type: GET_RESET_PASSWORD_REQUEST });
        fetch(`${URL}/password-reset/reset`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            'password': password,
            'token': token
        })
    })
    .then(res => checkReponse<TResponse>(res))
    .then(res => {
        if(res.success) {
            dispatch({
                type: GET_RESET_PASSWORD_SUCCESS,
                userData: res,
            })
        }
})
    .catch(err => {
        dispatch({
        type: GET_RESET_PASSWORD_ERROR
    })});
}