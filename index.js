//initialize web3
const Web3 = require("web3");
const rpcURL = "http://localhost:7545";
const web3 = new Web3(rpcURL);

//console.log(web3);

let address = "0xFb6058AC92F3f6216625D35cE9045A8584dc02da";
//let address = web3.eth.accounts[0];

web3.eth.getBalance(address, function(error, result) {
	if(error){
		console.log(error);
	}else{ 
		console.log(result);
	}
});
/*
const account1 = web3.eth.accounts[0];
const account2 = web3.eth.accounts[1];

let balance = (acct) => {return web3.fromWei(web3.eth.getBalance(acct), 'ether').toNumber();}

console.log(balance(account1));
console.log(balance(account2));
*/