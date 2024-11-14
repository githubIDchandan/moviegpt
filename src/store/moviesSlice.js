import { createSlice } from "@reduxjs/toolkit";



const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovie:null,
        trailerVideo:null,
        popular:null,
        topRated:null,
        upcoming:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovie=action.payload;
        },
        addPopular:(state,action)=>{
            state.popular=action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload;
        },
        addUpcomming:(state,action)=>{
            state.upcoming=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        }

    }
})


export const {addNowPlayingMovies,addTrailerVideo,addPopular,addTopRated,addUpcomming}=moviesSlice.actions;
export default moviesSlice.reducer;