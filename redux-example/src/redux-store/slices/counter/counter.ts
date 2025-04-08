import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    initialState: 0,
    name: 'Counter',
    reducers: {
        increment: (state) => state + 1, 
        decrement : (state) => state - 1,
    },
});

//this line automatically creates events for the actions
export const { increment, decrement } = counterSlice.actions;
//exporting the reducer
export default counterSlice.reducer;