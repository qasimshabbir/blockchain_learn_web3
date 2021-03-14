const Web3 = require('Web3');

//const rpcUrl = 'http://localhost:7545';
//const rpcUrl = 'https://mainnet.infura.io/v3/e80fe286acd444beb4496818b416452d';
const rpcUrl = "wss://ropsten.infura.io/ws/v3/e80fe286acd444beb4496818b416452d";
const web3 = new Web3(rpcUrl);


//const tokenAddress = '0x8079297510ab441e8adF8755c1d707B98dc12C11';
const address = '0x89BFc563d8737e183Cbb82a754AF016996117868'; //BNB Token



const abi=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "logUint",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retrieve",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contract = new web3.eth.Contract(abi,address);

contract.events.logUint({
    fromBlock: 0
}, function(error, event){ 
    console.log(event); 
})
.on("connected", function(subscriptionId){
    console.log(subscriptionId);
})
.on('data', function(event){
    console.log(event); // same results as the optional callback above
})
.on('changed', function(event){
    console.log(event);
})
.on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
    console.log(error,receipt);
});