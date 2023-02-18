import { registrationReducer, initialState } from './register';
import { newUser } from '../../utils/constants-test';
import * as types from '../actions/register';

describe('register reducer', () => {
    it('should return the initial state', () => {
        expect(
            registrationReducer(undefined, {})
        ).toEqual(initialState);
    });

    it('should handle GET_REGISTRATION_REQUEST', () => {
        expect(
            registrationReducer(undefined, {
                type: types.GET_REGISTRATION_REQUEST
            })
        ).toEqual({
            ...initialState,
            isLoading: true
        });
    });

    it('should handle GET_REGISTRATION_SUCCESS', () => {
        expect(
            registrationReducer(undefined, {
                type: types.GET_REGISTRATION_SUCCESS,
                userData: newUser
            })
        ).toEqual({
            ...initialState,
            userData: newUser
        });
    });

    it('should handle GET_REGISTRATION_ERROR', () => {
        expect(
            registrationReducer(undefined, {
                type: types.GET_REGISTRATION_ERROR
            })
        ).toEqual({
            ...initialState,
            hasError: true,
        })
    })
})