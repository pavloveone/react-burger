import { constructorReducer } from "../reducers/constructor";
import * as types from '../actions/constructor';

describe('constructor reducer', () => {
    it('should return the initial state', () => {
        expect(constructorReducer(undefined, {})
        ).toEqual({
            ingredients: [],
            bun: []
        });
    });
    it('should handle ADD_INGREDIENT', () => {
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
        expect(constructorReducer(undefined, {
            type: types.ADD_INGREDIENT,
            ingredients: ingredients
        })
        ).toEqual({
            ingredients: [ingredients],
            bun: []
        });
    });
    it('should handle DELETE_INGREDIENT', () => {
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
            constructorReducer(undefined, {
                type: types.DELETE_INGREDIENT,
                ingredients: ingredients
            })
        ).toEqual({
            ingredients: [],
            bun: []
        });
    });
    it('should handle ADD_BUN', () => {
        const bun = [
            {
                _id: '1324',
                name: 'bunbunbun',
                type: 'bun',
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
            constructorReducer(undefined, {
                type: types.ADD_BUN,
                bun: bun
            })
        ).toEqual({
            ingredients: [],
            bun: [bun]
        });
    });
    it('should handle REORDER_INGREDIENT', () => {
        const ingredients = [
            {
                _id: '1324',
                name: 'bunbunbun',
                type: 'bun',
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
            constructorReducer(undefined, {
                type: types.REORDER_INGREDIENT,
                ingredients: ingredients
            })
        ).toEqual({
            ingredients: [undefined],
            bun: []
        });
    });
    it('should handle RESET_CONSTRUCTOR', () => {
        expect(
            constructorReducer(undefined, {
                type: types.RESET_CONSTRUCTOR
            })
        ).toEqual({
            ingredients: [],
            bun: []
        });
    });
})