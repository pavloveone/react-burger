import { registrationReducer } from './register';
import * as types from '../actions/register';

describe('register reducer', () => {
    it('should return the initial state', () => {
        expect(
            registrationReducer(undefined, {})
        ).toEqual({
                isLoading: false,
                hasError: false,
                userData: {}
            });
    });

    it('should handle GET_REGISTRATION_REQUEST', () => {
        expect(
            registrationReducer(undefined, {
                type: types.GET_REGISTRATION_REQUEST
            })
        ).toEqual({
            isLoading: true,
            hasError: false,
            userData: {}
        });
    });

    it('should handle GET_REGISTRATION_SUCCESS', () => {
        const user = {
            username: 'user',
            email: 'email@email.ru',
            password: 'password',
        };
        expect(
            registrationReducer(undefined, {
                type: types.GET_REGISTRATION_SUCCESS,
                userData: user
            })
        ).toEqual({
            isLoading: false,
            hasError: false,
            userData: user
        });
    });

    it('should handle GET_REGISTRATION_ERROR', () => {
        expect(
            registrationReducer(undefined, {
                type: types.GET_REGISTRATION_ERROR
            })
        ).toEqual({
            isLoading: false,
            hasError: true,
            userData: {}
        })
    })
})