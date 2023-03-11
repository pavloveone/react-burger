import { profileReducer, initialState } from './profile';
import * as types from '../actions/profile';
import { newUser } from '../../utils/constants-test';

describe('profile reducer', () => {
    it('should return the initial state', () => {
        expect(
            profileReducer(undefined, {})
        ).toEqual(initialState);
    });
    it('should handle GET_PROFILE_REQUEST', () => {
        expect(
            profileReducer(undefined, {
                type: types.GET_PROFILE_REQUEST
            })
        ).toEqual({
            ...initialState,
            isLoading: true,
        });
    });
    it('should handle GET_PROFILE_SUCCESS', () => {
        expect(
            profileReducer(undefined, {
                type: types.GET_PROFILE_SUCCESS,
                userProfile: newUser
            })
        ).toEqual({
            ...initialState,
            userProfile: newUser
        });
    });
    it('should handle GET_PROFILE_ERROR', () => {
        expect(
            profileReducer(undefined, {
                type: types.GET_PROFILE_ERROR
            })
        ).toEqual({
            ...initialState,
            hasError: true
        });
    });
    it('should handle GET_UPDATE_PROFILE_REQUEST', () => {
        expect(
            profileReducer(undefined, {
                type: types.GET_UPDATE_PROFILE_REQUEST
            })
        ).toEqual({
            ...initialState,
            isLoading: true,
        });
    });
    it('should handle GET_UPDATE_PROFILE_SUCCESS', () => {
        expect(
            profileReducer(undefined, {
                type: types.GET_UPDATE_PROFILE_SUCCESS,
                userProfile: newUser
            })
        ).toEqual({
            ...initialState,
            userProfile: newUser,
        });
    });
    it('should handle GET_UPDATE_PROFILE_ERROR', () => {
        expect(
            profileReducer(undefined, {
                type: types.GET_UPDATE_PROFILE_ERR0R
            })
        ).toEqual({
            ...initialState,
            hasError: true,
        });
    });
})