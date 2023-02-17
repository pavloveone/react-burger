import { forgotPasswordReducer } from "./forgot-password";
import * as types from '../actions/forgot-password';

describe('forgot password reducer', () => {

    it('should return the initial state', () => {
        expect(forgotPasswordReducer(undefined, {})).toEqual({
            hasError: false,
            isLoading: false,
            hasUser: false,
            userData: {}
        });
    });

    it('should handle GET_FORGOT_PASSWORD_REQUEST', () => {
        expect(
            forgotPasswordReducer(undefined, {
                type: types.GET_FORGOT_PASSWORD_REQUEST
            })
        ).toEqual({
            hasError: false,
            isLoading: true,
            hasUser: false,
            userData: {}
        })
    })

    it('should handle GET_FORGOT_PASSWORD_SUCCESS', () => {
        const user = {
            username: 'user',
            email: 'email@email.ru',
            password: 'password',
        }
        expect(
            forgotPasswordReducer(undefined, {
                type: types.GET_FORGOT_PASSWORD_SUCCESS,
                userData: user,
            })
        ).toEqual({
            hasError: false,
            isLoading: false,
            hasUser: true,
            userData: user
        })
    })

    it('should handle GET_FORGOT_PASSWORD_ERROR', () => {
        expect(
            forgotPasswordReducer(undefined, {
                type: types.GET_FORGOT_PASSWORD_ERROR
            })
        ).toEqual({
            hasError: true,
            isLoading: false,
            hasUser: false,
            userData: {}
        })
    })
})