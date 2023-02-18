import { forgotPasswordReducer, initialState } from "./forgot-password";
import * as types from '../actions/forgot-password';
import { newUser } from "../../utils/constants-test";

describe('forgot password reducer', () => {

    it('should return the initial state', () => {
        expect(forgotPasswordReducer(undefined, {}))
        .toEqual(initialState);
    });

    it('should handle GET_FORGOT_PASSWORD_REQUEST', () => {
        expect(
            forgotPasswordReducer(undefined, {
                type: types.GET_FORGOT_PASSWORD_REQUEST
            })
        ).toEqual({
            ...initialState,
            isLoading: true,
        })
    })

    it('should handle GET_FORGOT_PASSWORD_SUCCESS', () => {
        expect(
            forgotPasswordReducer(undefined, {
                type: types.GET_FORGOT_PASSWORD_SUCCESS,
                userData: newUser,
            })
        ).toEqual({
            ...initialState,
            hasUser: true,
            userData: newUser
        })
    })

    it('should handle GET_FORGOT_PASSWORD_ERROR', () => {
        expect(
            forgotPasswordReducer(undefined, {
                type: types.GET_FORGOT_PASSWORD_ERROR
            })
        ).toEqual({
            ...initialState,
            hasError: true,
        })
    })
})