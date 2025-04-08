/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/counter';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
});


// Use this only when developing in typescript

//this defines that the root state is of type of store.getState - the states are automatically created there
export type RootState = ReturnType<typeof store.getState>

//this line dispatched the event dispatching - automatically generates the types
export type AppDispatch = typeof store.dispatch