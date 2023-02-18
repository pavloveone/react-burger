import { ordersReducer, initialState } from "./orders";
import * as types from '../actions/orders';
import { orders, statusMessages, errorMessage } from "../../utils/constants-test";

describe('orders reducer', () => {
    it('should return the initial state', () => {
        expect(
            ordersReducer(undefined, {})
        ).toEqual(initialState);
    });
    it('should handle WsConnecting', () => {
        expect(
            ordersReducer(undefined, {
                type: types.wsConnecting,
                status: statusMessages.connecting
            })
        ).toEqual({
            ...initialState,
            status: statusMessages.connecting,
        });
    });
    it('should handle wsOpen', () => {
        expect(
            ordersReducer(undefined, {
                type: types.wsOpen,
                status: statusMessages.online
            })
        ).toEqual({
            ...initialState,
            status: statusMessages.online,
        });
    });
    it('should handle wsClose', () => {
        expect(
            ordersReducer(undefined, {
                type: types.wsClose,
                status: statusMessages.offline
            })
        ).toEqual({
            ...initialState,
            status: statusMessages.offline,
        });
    });
    it('should handle wsError', () => {
        expect(
            ordersReducer(undefined, {
                type: types.wsError,
                payload: errorMessage
            })
        ).toEqual({
            ...initialState,
            connectionError: errorMessage,
        });
    });
    it('should handle wsMessage', () => {
        expect(
            ordersReducer(undefined, {
                type: types.wsMessage,
                payloady: orders
            })
        ).toEqual({
            ...initialState,
            userOrders: undefined
        });
    });
})