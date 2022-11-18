import ingredientsReducers from './burger-ingredients-slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        ingredients: ingredientsReducers,
    },
});