import ExpenseTracker from '../contracts/ExpenseTracker.json'
import Web3 from "web3";

const drizzleOptions = {
    contracts: [
        ExpenseTracker
    ],
    web3: {
        block: false,
        customerProvider: new Web3("ws://localhost:7545"),
    },
};

export default drizzleOptions;