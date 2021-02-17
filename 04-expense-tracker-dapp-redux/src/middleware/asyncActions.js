import Web3 from "web3";
import {EXPENSE_TRACKER_CONTRACT_ADDRESS,EXPENSE_TRACKER_CONTRACT_ABI} from "../contract/ExpenseTrackerContract"
import { createAsyncThunk } from "@reduxjs/toolkit";



 
// First, create the async thunk actions
export const loadBlockchain = createAsyncThunk(
    'transactions/fetchAll',
    async()=>{
        console.log("Web3.givenProvider = ",Web3.givenProvider);
        const web3 = new Web3(Web3.givenProvider);
        await Web3.givenProvider.enable();
        //dispatch(setWeb3(web3));
        const contract = new web3.eth.Contract(EXPENSE_TRACKER_CONTRACT_ABI,EXPENSE_TRACKER_CONTRACT_ADDRESS);
        //dispatch(setContract(contract));
        console.log('contract: ', contract);
        console.log('contract methods: ', contract.methods);
        
        //getting ETH Accounts
        const accounts = await web3.eth.getAccounts();
        //dispatch(setEthAccounts(accounts));

        let transactionCount = await contract.methods.getTransactionCount().call();
        console.log('transactionCount: ', transactionCount);
        let transactions = [];
        for(var i =0; i<transactionCount; i++){
            const {owner,description,amount}  = await contract.methods.transactions(i).call();
            console.log('owner,description,amount: ', owner,description,amount);
            
            let transaction = {
                id: i,
                owner: owner,
                text: description,
                amount: +amount
            }
            transactions.push(transaction);
            //dispatch(addTransaction(transaction));
        }
        return {web3,contract,accounts,transactions};
    }
);
export const pushTransaction = createAsyncThunk(
    'transactions/pushTransaction',
    async(transaction,thunkApi) =>{
        console.log("In Push Transaction ",thunkApi.getState());
        console.log("In Push Transaction: Transaction ",transaction);
        const state = thunkApi.getState().appReducer;
        const contract = state.contract;
        const accounts = state.accounts;

        console.log('transaction: ', transaction);
        const receipt = await contract.methods
                                    .addTransaction(
                                        transaction.text,
                                        transaction.amount
                                    )
                                    .send(
                                        {from: accounts[0]}
                                    );
        
        console.log('receipt: ', receipt);
        return transaction;
        //dispatch(addTransaction(transaction)); 
    }
);

//getting balance of account
export const loadAccountBalance = createAsyncThunk(
    'transactions/loadBalance',
    async({state}) => {
        console.log("In getBalance",state);
        const web3 = state.web3;
        const accounts = state.accounts;
        const balance = await web3.eth.getBalance(accounts[0]);
        return web3.utils.fromWei(balance,"ether");
    }
);