import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import langReducer from "./langConfig"



const appStore=configureStore(
    {
        reducer:{
          user:userReducer,
          movies:moviesReducer,
          gpt:gptReducer,
          config:langReducer
        },
    }
)

export default appStore;