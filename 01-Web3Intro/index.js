//initialize web3
const Web3 = require("web3");
const rpcURL = "HTTP://127.0.0.1:7545";

const web3 = new Web3(rpcURL);

//console.log(web3);

let address = "0xa46422854EBEbE1b2422046Be4a441daf4c4f738";
//let address = web3.eth.accounts[0];

web3.eth.getBalance(address, (error, result) => {
	if(error){
		console.log(error);
	}else{ 
		console.log(result);
		console.log(web3.utils.fromWei(result,'gwei'));
	}

});
/*
const account1 = web3.eth.accounts[0];
const account2 = web3.eth.accounts[1];

let balance = (acct) => {return web3.fromWei(web3.eth.getBalance(acct), 'ether').toNumber();}

console.log(balance(account1));
console.log(balance(account2));
*/