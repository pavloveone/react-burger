import { loginReducer } from "./login";
import * as types from '../actions/login';

describe('login reducer', () => {
    it('should return the initial state', () => {
        expect(
            loginReducer(undefined, {})
        ).toEqual({
            isLoading: false,
            hasError: false,
            isAuth: false,
            userData: {}
        });
    });
    it('should handle GET_LOGIN_REQUEST', () => {
        expect(
            loginReducer(undefined, {
                type: types.GET_LOGIN_REQUEST
            })
        ).toEqual({
            isLoading: true,
            hasError: false,
            isAuth: false,
            userData: {}
        });
    });
    it('should handle GET_LOGIN_SUCCESS', () => {
        const user = {
            username: 'user',
            email: 'email@email.ru',
            password: 'password',
        };
        expect(
            loginReducer(undefined, {
                type: types.GET_LOGIN_SUCCESS,
                userData: user
            })
        ).toEqual({
            isLoading: false,
            hasError: false,
            isAuth: true,
            userData: user
        });
    });
    it('should handle GET_LOGIN_ERROR', () => {
        expect(
            loginReducer(undefined, {
                type: types.GET_LOGIN_ERROR
            })
        ).toEqual({
            isLoading: false,
            hasError: true,
            isAuth: false,
            userData: {}
        });
    });
    it('should handle LOGOUT', () => {
        expect(
            loginReducer(undefined, {
                type: types.LOGOUT
            })
        ).toEqual({
            isLoading: false,
            hasError: false,
            isAuth: false,
            userData: {}
        });
    });
    it('should handle AUTH_CHECKED', () => {
        expect(
            loginReducer(undefined, {
                type: types.AUTH_CHECKED
            })
        ).toEqual({
            isLoading: false,
            hasError: false,
            isAuth: true,
            userData: {}
        });
    });
})