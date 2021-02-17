import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appReducer from "./AppSlice";

export const store = configureStore({
    reducer: {
        appReducer : appReducer
    },
    middleware: getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
})

console.log("App Reducer",appReducer);