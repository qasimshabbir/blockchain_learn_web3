import React from 'react'
import { newContextComponents } from "@drizzle/react-components";

const {AccountData,ContractData,ContractForm} = newContextComponents;
export const ExpenseTracker = ({drizzle, drizzleState}) => {
    console.log("Drizzle State",drizzleState);
    //const {contracts,accounts, drizzleStatus}  = drizzleState;
    
    //console.log('transactionCount: ', transactionCount);
    return (
        <div>
            <h1> Drizzle Examples </h1>
            <p>
                Examples of how to get started with Drizzle.
            </p>
            <hr />
            <div>
            <h2> Active Account </h2>
            <AccountData
                drizzle={drizzle}
                drizzleState = {drizzleState}
                accountIndex = {0}
                units = "ether"
                precision={3}
            />
            </div>
            <hr />
            <div>
                <h1> Expense Tracker History </h1>
                <div>
                    No of Transactions: 
                    
                    <ContractData  
                        drizzle = {drizzle} 
                        drizzleState = {drizzleState}
                        contract = "ExpenseTracker"
                        method = "transactions"
                        methodArgs= {[0]}
                        render = { ({amount,description})=>{
                            return (<><span>{description}</span><span>{amount}</span></>);
                        }}
                    >
                    </ContractData>
                </div>
            </div>
            <div>
                <h1> Add your Income/Expense </h1>
                <ContractForm
                    drizzle = {drizzle}
                    drizzleState = {drizzleState}
                    contract = "ExpenseTracker"
                    method = "addTransaction"
                />
            </div>
        </div>
        
    )
}
