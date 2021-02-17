import { createSlice } from "@reduxjs/toolkit";

export const adoptSlice = createSlice({
    name: "adoptionReducer",
    initialState: {
        web3:{},
        contract: {},
        address: {},
    },
    reducers:{
        
    }

});
export const adoptReducer = adoptSlice.reducer;
