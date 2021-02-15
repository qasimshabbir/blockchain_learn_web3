import {configureStore} from "@reduxjs/toolkit";
import { adoptReducer } from "./AdoptionSlice";

export const store = configureStore({
  reducer: {
      adoptReducer: adoptReducerr,
  }  
})