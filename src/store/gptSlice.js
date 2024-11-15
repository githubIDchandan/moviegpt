import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        toggleView:false,
        tmdbMovies:null,
        gptResult:null,
    },
    reducers:{
        addToggleView:(state,action)=>{
             state.toggleView=!state.toggleView
        },
        addGptMovieResult:(state,action)=>{
            const {movieName,allMovieTmdb}=action.payload;
            state.tmdbMovies=allMovieTmdb;
            state.gptResult=movieName;
        },
    }
})


export const {addToggleView,addGptMovieResult}=gptSlice.actions;
export default gptSlice.reducer;