import { ordersReducer } from "./orders";
import * as types from '../actions/orders';

describe('orders reducer', () => {
    it('should return the initial state', () => {
        expect(
            ordersReducer(undefined, {})
        ).toEqual({
            status: '',
            connectionError: '',
            userOrders: null
        });
    });
    it('should handle WsConnecting', () => {
        const statusMessage = 'Connecting...';
        expect(
            ordersReducer(undefined, {
                type: types.wsConnecting,
                status: statusMessage
            })
        ).toEqual({
            status: statusMessage,
            connectionError: '',
            userOrders: null
        });
    });
    it('should handle wsOpen', () => {
        const statusMessage = 'Online';
        expect(
            ordersReducer(undefined, {
                type: types.wsOpen,
                status: statusMessage
            })
        ).toEqual({
            status: statusMessage,
            connectionError: '',
            userOrders: null
        });
    });
    it('should handle wsClose', () => {
        const statusMessage = 'Offline';
        expect(
            ordersReducer(undefined, {
                type: types.wsClose,
                status: statusMessage
            })
        ).toEqual({
            status: statusMessage,
            connectionError: '',
            userOrders: null
        });
    });
    it('should handle wsError', () => {
        const errorMessage = 'Error';
        expect(
            ordersReducer(undefined, {
                type: types.wsError,
                payload: errorMessage
            })
        ).toEqual({
            status: '',
            connectionError: errorMessage,
            userOrders: null
        });
    });
    it('should handle wsMessage', () => {
        const orders = {
            total: 10,
            totalToday: 5,
            orders : [
                {
                    _id: '123',
                    ingredients: [
                        'ingredient-1', 'ingredient-2',
                    ],
                    status: 'done',
                    name: 'burger',
                    number: '2',
                    createdAt: 'string',
                    updatedAt: 'string',
                },
                {
                    _id: '321',
                    ingredients: [
                        'ingredient-1', 'ingredient-5',
                    ],
                    status: 'pending',
                    name: 'burger-2',
                    createdAt: 'string1',
                    updatedAt: 'string2',
                }
            ]
        };
        expect(
            ordersReducer(undefined, {
                type: types.wsMessage,
                payloady: orders
            })
        ).toEqual({
            status: '',
            connectionError: '',
        });
    });
})