
import { v4 as uuidv4 } from 'uuid';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const ADD_BUN = 'ADD_BUN';
export const REORDER_INGREDIENT = 'REORDER_INGREDIENT';
export const RESET_CONSTRUCTOR = 'RESET_CONSTRUCTOR';


export const addBun = (item, dispatch) => {
    dispatch({
        type: item.type === 'bun' ? ADD_BUN : ADD_INGREDIENT,
        payload: {
            ...item, 
            id: uuidv4()
        }
    })
}