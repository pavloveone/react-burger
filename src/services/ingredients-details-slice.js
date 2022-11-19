import { createSlice } from '@reduxjs/toolkit';

const IngredientsDetailsSlice = createSlice({
    name: 'ingredientsDetails',
    initialState: {
        currentItem: null,
        visibleModal: false
    },
    reducers: {
        showDetails(state, action) {
            state.currentItem = action.payload;
            state.visibleModal = true;
        },
        closeDetails(state) {
            state.currentItem = null;
            state.visibleModal = false;
        }
    }
})

export default IngredientsDetailsSlice.reducer;
export const { showDetails, closeDetails } = IngredientsDetailsSlice.actions;