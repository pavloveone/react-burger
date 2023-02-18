import { ingredientsReducer, initialState } from "./ingredients";
import * as types from '../actions/ingredients';
import { ingredients } from "../../utils/constants-test";

describe('ingredients reducer', () => {
    it('should return the initial state', () => {
        expect(
            ingredientsReducer(undefined, {})
        ).toEqual(initialState);
    });
    it('should handle GET_INGREDIENTS_REQUEST', () => {
        expect(
            ingredientsReducer(undefined, {
                type: types.GET_INGREDIENTS_REQUEST
            })
        ).toEqual({
            ...initialState,
            isLoading: true,
        });
    });
    it('should handle GET_LOGIN_SUCCESS', () => {
        expect(
            ingredientsReducer(undefined, {
                type: types.GET_LOGIN_SUCCESS,
                ingredients: ingredients
            })
        ).toEqual({
            ...initialState,
        });
    });
    it('should handle GET_INGREDIENTS_ERROR', () => {
        expect(
            ingredientsReducer(undefined, {
                type: types.GET_INGREDIENTS_ERROR
            })
        ).toEqual({
            ...initialState,
            hasError: true
        });
    });
})