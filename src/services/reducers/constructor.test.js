import { constructorReducer, initialState } from "../reducers/constructor";
import * as types from '../actions/constructor';
import { ingredients, bun } from "../../utils/constants-test";

describe('constructor reducer', () => {
    it('should return the initial state', () => {
        expect(constructorReducer(undefined, {})
        ).toEqual(initialState);
    });
    it('should handle ADD_INGREDIENT', () => {
        expect(constructorReducer(undefined, {
            type: types.ADD_INGREDIENT,
            ingredients: ingredients
        })
        ).toEqual({
            ...initialState,
            ingredients: [ingredients],
        });
    });
    it('should handle DELETE_INGREDIENT', () => {
        expect(
            constructorReducer(undefined, {
                type: types.DELETE_INGREDIENT,
                ingredients: ingredients
            })
        ).toEqual({
            ...initialState
        });
    });
    it('should handle ADD_BUN', () => {
        expect(
            constructorReducer(undefined, {
                type: types.ADD_BUN,
                bun: bun
            })
        ).toEqual({
            ...initialState,
            bun: [bun]
        });
    });
    it('should handle REORDER_INGREDIENT', () => {
        expect(
            constructorReducer(undefined, {
                type: types.REORDER_INGREDIENT,
                ingredients: ingredients
            })
        ).toEqual({
            ...initialState,
            ingredients: [undefined],
        });
    });
    it('should handle RESET_CONSTRUCTOR', () => {
        expect(
            constructorReducer(undefined, {
                type: types.RESET_CONSTRUCTOR
            })
        ).toEqual({
            ...initialState,
        });
    });
})