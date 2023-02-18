import { orderDetailsReducer, initialState } from "./order-details";
import * as types from '../actions/order-details';
import { order, orderNumber } from "../../utils/constants-test";

describe('order details reducer', () => {
    it('should return the initial state', () => {
        expect(
            orderDetailsReducer(undefined, {})
        ).toEqual(initialState);
    });
    it('should handle GET_ORDER_REQUEST', () => {
        expect(
            orderDetailsReducer(undefined, {
                type: types.GET_ORDER_REQUEST
            })
        ).toEqual({
            ...initialState,
            isLoading: true,
        });
    });
    it('should handle GET_ORDER_SUCCESS', () => {
        expect(
            orderDetailsReducer(undefined, {
                type: types.GET_ORDER_SUCCESS,
                orderNumber: orderNumber
            })
        ).toEqual({
            ...initialState,
            orderNumber: orderNumber,
        });
    });
    it('should handle GET_ORDER_ERROR', () => {
        expect(
            orderDetailsReducer(undefined, {
                type: types.GET_ORDER_ERROR
            })
        ).toEqual({
            ...initialState,
            hasError: true,
        });
    });
    it('should handle SHOW_ORDER', () => {
        expect(
            orderDetailsReducer(undefined, {
                type: types.SHOW_ORDER
            })
        ).toEqual({
            ...initialState,
            isVisible: true,
        });
    });
    it('should handle CLOSE_ORDER', () => {
        expect(
            orderDetailsReducer(undefined, {
                type: types.CLOSE_ORDER
            })
        ).toEqual({
            ...initialState
        });
    });
    it('should handle FETCH_ORDER_NUMBER_REQUEST', () => {
        expect(
            orderDetailsReducer(undefined, {
                type: types.FETCH_ORDER_NUMBER_REQUEST
            })
        ).toEqual({
            ...initialState,
            isLoading: true,
        });
    });
    it('should handle FETCH_ORDER_NUMBER_SUCCESS', () => {
        expect(
            orderDetailsReducer(undefined, {
                type: types.FETCH_ORDER_NUMBER_SUCCESS,
                currentOrders: order
            })
        ).toEqual({
            ...initialState,
            currentOrders: order
        });
    });
        it('should handle FETCH_ORDER_NUMBER_ERROR', () => {
        expect(
            orderDetailsReducer(undefined, {
                type: types.FETCH_ORDER_NUMBER_ERROR,
            })
        ).toEqual({
            ...initialState,
            hasError: true,
        });
    });
})