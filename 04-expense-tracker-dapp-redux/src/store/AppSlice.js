import { createSlice } from "@reduxjs/toolkit";
import { loadBlockchain, pushTransaction } from "../middleware/asyncActions";

export const appSlice = createSlice({
    name: "ExpenseTracker",
    initialState: {
        transactions: [],
        web3: null,
        contract: null,
        accounts:[],
        status: 'idle',
        errors: [],
        transactionStatus: 'idle'
    },
    reducers: {
        addError: (state,action) => {
            state.errors.push(action.payload);
        },
        resetErrors: (state,action) => {
            state.errors=[];
        }
    },
    extraReducers: {
        //add reducers for async action types here
        [loadBlockchain.pending]: (state) =>{
            console.log('In Pending');
            state.status = 'loading';
        },
        [loadBlockchain.fulfilled]: (state,action) =>{
            
            //add web3 for async
            const {web3,contract,accounts,transactions} = action.payload;
            console.log('In Fullfilled',state);
            state.web3 = web3;
            state.contract = contract;
            state.accounts = accounts;
            state.transactions = transactions;
            state.status = 'succeeded';
        },
        [loadBlockchain.rejected]: (state,action) =>{
            console.log('Rejected');
            state.status = 'failed';
            state.errors.push(action.error.message);
        },
        [pushTransaction.pending]: (state) =>{
            console.log('In Pending');
            state.transactionStatus = 'loading';
        },
        [pushTransaction.fulfilled]: (state,action) =>{
            
            //add web3 for async
            state.transactions.push(action.payload);
            state.transactionStatus = 'succeeded';
        },
        [pushTransaction.rejected]: (state,action) =>{
            console.log('Rejected');
            state.transactionStatus = 'failed';
            state.errors.push(action.error.message);
        }
    }
})


export const {
    addTransaction,
    setEthAccounts,
    setWeb3,
    setContract,
    addError,
    resetErrors
 } = appSlice.actions;

 //using default redux state
export const selectWeb3 = (state) => state.web3;
export const selectContract = (state) => state.contract;
export const selectAccounts = (state) => state.accounts;

const appReducer =  appSlice.reducer;
export default appReducer;

