import { wsConnecting, wsOpen, wsClose, wsMessage, wsError } from '../actions/feed';


const initialState = {
    status: '',
    connectionError: '',
    orders: []
}

export const feedReducer = (state = initialState, action) => {
    switch(action.type) {
        case wsConnecting:
            return {
                ...state,
                status: 'CONNECTING...'
            }
        case wsOpen:
            return {
                ...state,
                status: 'ONLINE',
                connectionError: ''
            }
        case wsClose:
            return {
                ...state,
                status: 'OFFLINE'
            }
        case wsError:
            return {
                ...state,
                connectionError: action.payload
            }
        case wsMessage:
            return {
                ...state,
                orders: action.payload
            }
        default: {
            return state
        }
    }
}