import { createReducer } from '@reduxjs/toolkit';
import { TOrders } from '../../utils/types';
import { wsConnecting, wsOpen, wsClose, wsMessage, wsError } from '../actions/orders';

export type TOrdersListState = {
    status: string;
    connectionError: string;
    userOrders: TOrders | null;
}


const initialState: TOrdersListState = {
    status: '',
    connectionError: '',
    userOrders: null,
}

export const ordersReducer = createReducer(initialState, builder => {
    builder
        .addCase(wsConnecting, state => {
            state.status = 'Connecting...';
        })
        .addCase(wsOpen, state => {
            state.status = 'Online';
            state.connectionError = '';
        })
        .addCase(wsClose, state => {
            state.status = 'Offline';
        })
        .addCase(wsError, (state, action) => {
            state.connectionError = action.payload;
        })
        .addCase(wsMessage, (state, action) => {
            state.userOrders = action.payload;
        })
})