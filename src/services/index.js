import ingredientsReducers from './burger-ingredients-slice';
import detailsReducers from './ingredients-details-slice';
import constructorReducers from './burger-constructor-slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        ingredients: ingredientsReducers,
        ingredientsDetails: detailsReducers,
        burgerConstructor: constructorReducers
    },
});