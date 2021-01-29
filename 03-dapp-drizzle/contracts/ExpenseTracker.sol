// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract ExpenseTracker{
    
    //mapping to hold balances against EOA accounts
    struct Transaction{
        address owner;
        string description;
        int256 amount;
    }
    
    Transaction[] public transactions;
    
    function addTransaction(string memory description, int256 amount) public {
        require(amount != 0,"Invalid amount!");
        transactions.push(Transaction(msg.sender,description,amount));
    }
    
    function getTransactionCount() public view returns(uint256){
        return transactions.length;
    }
    
}