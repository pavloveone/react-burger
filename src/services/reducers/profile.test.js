import { profileReducer } from './profile';
import * as types from '../actions/profile';

describe('profile reducer', () => {
    it('should return the initial state', () => {
        expect(
            profileReducer(undefined, {})
        ).toEqual({
                isLoading: false,
                hasError: false,
                userProfile: {}
            });
    });
    it('should handle GET_PROFILE_REQUEST', () => {
        expect(
            profileReducer(undefined, {
                type: types.GET_PROFILE_REQUEST
            })
        ).toEqual({
            isLoading: true,
            hasError: false,
            userProfile: {}
        });
    });
    it('should handle GET_PROFILE_SUCCESS', () => {
        const user = {
            username: 'user',
            email: 'email@email.ru',
            password: 'password',
        }
        expect(
            profileReducer(undefined, {
                type: types.GET_PROFILE_SUCCESS,
                userProfile: user
            })
        ).toEqual({
            isLoading: false,
            hasError: false,
            userProfile: user
        });
    });
    it('should handle GET_PROFILE_ERROR', () => {
        expect(
            profileReducer(undefined, {
                type: types.GET_PROFILE_ERROR
            })
        ).toEqual({
            isLoading: false,
            hasError: true,
            userProfile: {}
        });
    });
    it('should handle GET_UPDATE_PROFILE_REQUEST', () => {
        expect(
            profileReducer(undefined, {
                type: types.GET_UPDATE_PROFILE_REQUEST
            })
        ).toEqual({
            isLoading: true,
            hasError: false,
            userProfile: {}
        });
    });
    it('should handle GET_UPDATE_PROFILE_SUCCESS', () => {
        const user = {
            username: 'user',
            email: 'email@email.ru',
            password: 'password',
        }
        expect(
            profileReducer(undefined, {
                type: types.GET_UPDATE_PROFILE_SUCCESS,
                userProfile: user
            })
        ).toEqual({
            isLoading: false,
            hasError: false,
            userProfile: user,
        });
    });
    it('should handle GET_UPDATE_PROFILE_ERROR', () => {
        expect(
            profileReducer(undefined, {
                type: types.GET_UPDATE_PROFILE_ERR0R
            })
        ).toEqual({
            isLoading: false,
            hasError: true,
            userProfile: {}
        });
    });
})