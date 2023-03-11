import { loginReducer, initialState } from "./login";
import * as types from '../actions/login';
import { newUser } from "../../utils/constants-test";

describe('login reducer', () => {
    it('should return the initial state', () => {
        expect(
            loginReducer(undefined, {})
        ).toEqual(initialState);
    });
    it('should handle GET_LOGIN_REQUEST', () => {
        expect(
            loginReducer(undefined, {
                type: types.GET_LOGIN_REQUEST
            })
        ).toEqual({
            ...initialState,
            isLoading: true,
        });
    });
    it('should handle GET_LOGIN_SUCCESS', () => {
        expect(
            loginReducer(undefined, {
                type: types.GET_LOGIN_SUCCESS,
                userData: newUser
            })
        ).toEqual({
            ...initialState,
            isAuth: true,
            userData: newUser
        });
    });
    it('should handle GET_LOGIN_ERROR', () => {
        expect(
            loginReducer(undefined, {
                type: types.GET_LOGIN_ERROR
            })
        ).toEqual({
            ...initialState,
            hasError: true,
        });
    });
    it('should handle LOGOUT', () => {
        expect(
            loginReducer(undefined, {
                type: types.LOGOUT
            })
        ).toEqual({
            ...initialState
        });
    });
    it('should handle AUTH_CHECKED', () => {
        expect(
            loginReducer(undefined, {
                type: types.AUTH_CHECKED
            })
        ).toEqual({
            ...initialState,
            isAuth: true,
        });
    });
})