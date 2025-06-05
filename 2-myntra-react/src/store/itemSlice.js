import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name : 'items',
    initialState : [],
    reducers : {
        addInitialItems : (state, action) => {
            state.length = 0; // clear existing items
            state.push(...action.payload);
        }
    }
})

export const itemsActions = itemSlice.actions;

export default itemSlice;