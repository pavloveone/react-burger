import { resetPasswordReducer, initialState } from "./reset-password";
import { user } from "../../utils/constants-test";
import * as types from '../actions/reset-password';

describe('reset password reducer', () => {

    it('should return the initial state', () => {
        expect(resetPasswordReducer(undefined, {}))
        .toEqual(initialState);
    });

    it('should handle GET_RESET_PASSWORD_REQUEST', () => {
        expect(
            resetPasswordReducer(undefined, {
                type: types.GET_RESET_PASSWORD_REQUEST
            })
        ).toEqual({
            ...initialState,
            isLoading: true,
        })
    })

    it('should handle GET_RESET_PASSWORD_SUCCESS', () => {
        expect(
            resetPasswordReducer(undefined, {
                type: types.GET_RESET_PASSWORD_SUCCESS,
                userData: user,
            })
        ).toEqual({
            ...initialState,
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
            ...initialState,
            hasError: true,
        })
    })
})