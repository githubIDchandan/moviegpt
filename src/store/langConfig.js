import { createSlice } from "@reduxjs/toolkit";


const langConfig=createSlice({
    name:"config",
    initialState:{
        lang:"en",
    },
    reducers:{
        addLang:(state,action)=>{
            state.lang=action.payload;
        }
    }
})


export const {addLang}=langConfig.actions;
export default langConfig.reducer