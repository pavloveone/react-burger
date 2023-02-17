import { ingredientsReducer } from "./ingredients";
import * as types from '../actions/ingredients';

describe('ingredients reducer', () => {
    it('should return the initial state', () => {
        expect(
            ingredientsReducer(undefined, {})
        ).toEqual({
            ingredients: [],
            isLoading: false,
            hasError: false
        });
    });
    it('should handle GET_INGREDIENTS_REQUEST', () => {
        expect(
            ingredientsReducer(undefined, {
                type: types.GET_INGREDIENTS_REQUEST
            })
        ).toEqual({
            ingredients: [],
            isLoading: true,
            hasError: false
        });
    });
    it('should handle GET_LOGIN_SUCCESS', () => {
        const ingredients = [
            {
                _id: '1324',
                name: 'bunbunbun',
                type: 'main',
                proteins: 11,
                fat: 23,
                carbohydrates: 42,
                calories: 14,
                price: 55,
                image: 'imageimage',
                image_large: 'imageimageimageimage',
                image_mobile: 'imageimagemobil',
            }
        ];
        expect(
            ingredientsReducer(undefined, {
                type: types.GET_LOGIN_SUCCESS,
                ingredients: ingredients
            })
        ).toEqual({
            ingredients: [],
            isLoading: false,
            hasError: false
        });
    });
    it('should handle GET_INGREDIENTS_ERROR', () => {
        expect(
            ingredientsReducer(undefined, {
                type: types.GET_INGREDIENTS_ERROR
            })
        ).toEqual({
            ingredients: [],
            isLoading: false,
            hasError: true
        });
    });
})