import { resetPasswordReducer } from "./reset-password";
import * as types from '../actions/reset-password';

describe('reset password reducer', () => {

    it('should return the initial state', () => {
        expect(resetPasswordReducer(undefined, {})).toEqual({
            hasError: false,
            isLoading: false,
            success: false,
            userData: {}
        });
    });

    it('should handle GET_RESET_PASSWORD_REQUEST', () => {
        expect(
            resetPasswordReducer(undefined, {
                type: types.GET_RESET_PASSWORD_REQUEST
            })
        ).toEqual({
            hasError: false,
            isLoading: true,
            success: false,
            userData: {},
        })
    })

    it('should handle GET_RESET_PASSWORD_SUCCESS', () => {
        const user = {
            username: 'user',
            email: 'email@email.ru',
            password: 'password',
            success: true
        }
        expect(
            resetPasswordReducer(undefined, {
                type: types.GET_RESET_PASSWORD_SUCCESS,
                userData: user,
            })
        ).toEqual({
            hasError: false,
            isLoading: false,
            success: true,
            userData: user
        })
    })

    it('should handle GET_RESET_PASSWORD_ERROR', () => {
        expect(
            resetPasswordReducer(undefined, {
                type: types.GET_RESET_PASSWORD_ERROR
            })
        ).toEqual({
            isLoading: false,
            success: false,
            hasError: true,
            userData: {},
        })
    })
})