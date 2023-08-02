import { createSlice } from "@reduxjs/toolkit";

const initialState : any = {
    totalBlockUI : 0
};

export const BlockUI = createSlice({
name : 'BlockUI',
initialState,
reducers :{
    // getCount : (state, action) =>{
    //     state.
    // },
    start : (state, action) => {
        state.totalBlockUI = action.payload + 1;
    },
    stop : (state, action) => {
        state.totalBlockUI = action.payload - 1;
    }
}
});

export const { start, stop} =  BlockUI.actions;