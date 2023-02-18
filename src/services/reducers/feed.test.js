import { feedReducer, initialState } from "./feed";
import * as types from '../actions/feed';
import { errorMessage, orders, statusMessages } from "../../utils/constants-test";

describe('feed reducer', () => {
    it('should return the initial state', () => {
        expect(
            feedReducer(undefined, {})
        ).toEqual(initialState);
    });
    it('should handle WsConnecting', () => {
        expect(
            feedReducer(undefined, {
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
            feedReducer(undefined, {
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
            feedReducer(undefined, {
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
            feedReducer(undefined, {
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
            feedReducer(undefined, {
                type: types.wsMessage,
                payloady: orders
            })
        ).toEqual({
            ...initialState,
            orders: undefined
        });
    });
})