import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { checkReponse } from '../utils/variables';

export const fetchOrder = createAsyncThunk(
    'order/fetchAll',
    async ({ingredients}) => {
        return fetch('https://norma.nomoreparties.space/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json;charset=utf-8"
            },            
            body: JSON.stringify({
                ingredients,
            }),
        })
        .then(checkReponse)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
);

const BurgerConstructorSlice = createSlice({
    name: 'burgerConstructor',
    initialState: {
        ingredients: [],
        bun: null,
        visibleOrder: false,
    },
    reducers: {
        showOrder(state, action) {
            state.ingredients = action.payload;
            state.bun = action.payload;
            state.visibleOrder = true;
        },
        closeOrder(state) {
            state.visibleOrder = false;
            state.bun = null;
            state.ingredients = [];
        }
    }
})

export default BurgerConstructorSlice.reducer;
export const { showOrder, closeOrder } = IngredientsDetailsSlice.actions;

