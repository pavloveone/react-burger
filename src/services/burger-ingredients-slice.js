import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { burgerApiUrl } from '../utils/variables.js'

export const fetchBurgerIngredients = createAsyncThunk(
    'ingredients/fetchAll',
    async () => {
        const res = await fetch(`${burgerApiUrl}/ingredients`);
        const json = await res.json();
        return json.data;
    }
);

const BurgerIngredientsSlice = createSlice({
    name: 'ingredients',
    initialState: {
        ingredients: [],
        isLoading: false,
        hasError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBurgerIngredients.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.ingredients = [];
            })
            .addCase(fetchBurgerIngredients.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.ingredients = action.payload;
            })
            .addCase(fetchBurgerIngredients.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
                state.ingredients = [];
            });
    },
});

export default BurgerIngredientsSlice.reducer;