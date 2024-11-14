import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        toggleView:false,
    },
    reducers:{
        addToggleView:(state,action)=>{
             state.toggleView=!state.toggleView
        }
    }
})


export const {addToggleView}=gptSlice.actions;
export default gptSlice.reducer;