import { orderDetailsReducer } from "./order-details";
import * as types from '../actions/order-details';

describe('order details reducer', () => {
    it('should return the initial state', () => {
        expect(
            orderDetailsReducer(undefined, {})
        ).toEqual({
            isVisible: false,
            isLoading: false,
            hasError: false,
            orderNumber: null,
            currentOrders: []
        });
    });
    it('should handle GET_ORDER_REQUEST', () => {
        expect(
            orderDetailsReducer(undefined, {
                type: types.GET_ORDER_REQUEST
            })
        ).toEqual({
            isVisible: false,
            isLoading: true,
            hasError: false,
            orderNumber: null,
            currentOrders: []
        });
    });
    it('should handle GET_ORDER_SUCCESS', () => {
        const orderNumber = 1;
        expect(
            orderDetailsReducer(undefined, {
                type: types.GET_ORDER_SUCCESS,
                orderNumber: orderNumber
            })
        ).toEqual({
            isVisible: false,
            isLoading: false,
            hasError: false,
            orderNumber: orderNumber,
            currentOrders: []
        });
    });
    it('should handle GET_ORDER_ERROR', () => {
        expect(
            orderDetailsReducer(undefined, {
                type: types.GET_ORDER_ERROR
            })
        ).toEqual({
            isVisible: false,
            isLoading: false,
            hasError: true,
            orderNumber: null,
            currentOrders: []
        });
    });
    it('should handle SHOW_ORDER', () => {
        expect(
            orderDetailsReducer(undefined, {
                type: types.SHOW_ORDER
            })
        ).toEqual({
            isVisible: true,
            isLoading: false,
            hasError: false,
            orderNumber: null,
            currentOrders: [] 
        });
    });
    it('should handle CLOSE_ORDER', () => {
        expect(
            orderDetailsReducer(undefined, {
                type: types.CLOSE_ORDER
            })
        ).toEqual({
            isVisible: false,
            isLoading: false,
            hasError: false,
            orderNumber: null,
            currentOrders: []
        });
    });
    it('should handle FETCH_ORDER_NUMBER_REQUEST', () => {
        expect(
            orderDetailsReducer(undefined, {
                type: types.FETCH_ORDER_NUMBER_REQUEST
            })
        ).toEqual({
            isVisible: false,
            isLoading: true,
            hasError: false,
            orderNumber: null,
            currentOrders: []
        });
    });
    it('should handle FETCH_ORDER_NUMBER_SUCCESS', () => {
        const order = [
            {
                _id: '12345',
                ingredients: [
                    'ingredient-1', 'ingredient-2', 'ingredient-3'
                ],
                status: 'done',
                name: 'burger',
                createdAt: 'created',
                updateAt: 'update'
            }
        ]
        expect(
            orderDetailsReducer(undefined, {
                type: types.FETCH_ORDER_NUMBER_SUCCESS,
                currentOrders: order
            })
        ).toEqual({
            isVisible: false,
            isLoading: false,
            hasError: false,
            orderNumber: null,
            currentOrders: order
        });
    });
        it('should handle FETCH_ORDER_NUMBER_ERROR', () => {
        expect(
            orderDetailsReducer(undefined, {
                type: types.FETCH_ORDER_NUMBER_ERROR,
            })
        ).toEqual({
            isVisible: false,
            isLoading: false,
            hasError: true,
            orderNumber: null,
            currentOrders: []
        });
    });
})