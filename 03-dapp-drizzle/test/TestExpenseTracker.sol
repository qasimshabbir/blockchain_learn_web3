// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/ExpenseTracker.sol";

contract TestExpenseTracker {
    
    function testGetTransactionCountOnStart() public{
        ExpenseTracker tracker =  ExpenseTracker(DeployedAddresses.ExpenseTracker());
        Assert.equal(tracker.getTransactionCount(),0,"No Initial Transacitons");
    }
    function testAddTransaction() public{
        ExpenseTracker tracker =  ExpenseTracker(DeployedAddresses.ExpenseTracker());
        string memory _title = "Expense";
        int256 _amount = 100;
        tracker.addTransaction(_title,_amount);
        (,string memory title,int256 amount) = tracker.transactions(0);
        Assert.equal(title, _title, "Correct description");
        Assert.equal(amount, _amount, "Correct Amount");
        Assert.equal(tracker.getTransactionCount(), 1, "Owner should have 1 transactoin");
    }
    
    function testGetTransactionCountAfterAddThreeMore() public{
        ExpenseTracker tracker =  ExpenseTracker(DeployedAddresses.ExpenseTracker());
        tracker.addTransaction("Add Salary", 100);
        tracker.addTransaction("Expense", -100);
        tracker.addTransaction("Expense", -100);
        Assert.equal(tracker.getTransactionCount(),4,"No Initial Transacitons");
    }
  
}
