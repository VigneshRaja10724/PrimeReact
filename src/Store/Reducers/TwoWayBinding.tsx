import { createSlice } from "@reduxjs/toolkit";

const initialState : any = {
    name : ""
};

export const TwoWay = createSlice({
name : 'TwoWay',
initialState,
reducers :{
    setName : (state, action) => {
        state.name = action.payload ;
    },
   }
});

export const { setName, } =  TwoWay.actions;