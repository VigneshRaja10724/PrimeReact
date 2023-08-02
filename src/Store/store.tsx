import { configureStore } from "@reduxjs/toolkit";
import { BlockUI } from "./Reducers/BlockUI";

export const store = configureStore({
    reducer: {
        UIBlock : BlockUI.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>; //used to get the data from the store
export type AppDispatch = typeof store.dispatch;