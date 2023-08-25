import { configureStore } from "@reduxjs/toolkit";
import { BlockUI } from "./Reducers/BlockUI";
import { reducer as formReducer } from 'redux-form';
import { TwoWay } from "./Reducers/TwoWayBinding";

export const store = configureStore({
    reducer: {
        UIBlock : BlockUI.reducer,
        TwoWay : TwoWay.reducer,
        form: formReducer
    }
})

export type RootState = ReturnType<typeof store.getState>; //used to get the data from the store
export type AppDispatch = typeof store.dispatch;