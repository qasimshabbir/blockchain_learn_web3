import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Web3 from "web3";
import TruffleContract from '@truffle/contract';
import AdoptionArtifact from '../contracts/Adoption.json';

export const initWeb3 = createAsyncThunk(
  'initWeb3',
  async (thunkApi) =>{
    console.log("Web3.givenProvider = ",Web3.givenProvider);
    const web3 = new Web3(Web3.givenProvider);
    await web3.givenProvider.enable();
    return web3;
  }
);
export const initContract = createAsyncThunk(
  'initContract',
  async (thunkApi) =>{
    const web3 = thunkApi.getState().adoption.web3;
    if(web3 == null){
      return null;
    }
    const contract = TruffleContract(AdoptionArtifact);
    contract.setProvider(web3);
    return contract;
  }
);


 
export const counterSlice = createSlice({
  name: 'adoptionSlice',
  initialState: {
    web3: null,
    contract: null,
    account: null,
    pets: [],
  },
  reducers: {
  },
  extraReducers: {
    [initWeb3.fulfilled]: (state,action) =>{
      //add web3 instance to the state array
      state.web3 = action.payload;
    },
    [initContract.fulfilled]: (state,action) =>{
      //add contract instance to the state array
      state.contract = action.payload;
    }
  },
});

export default counterSlice.reducer;