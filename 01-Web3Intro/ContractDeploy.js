Web3 = require('web3');
web3 = new Web3('http://localhost:7545');
const abi = [{"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const bytecode = '0x6080604052600a60005534801561001557600080fd5b5060c7806100246000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80632e64cec11460375780636057361d146053575b600080fd5b603d607e565b6040518082815260200191505060405180910390f35b607c60048036036020811015606757600080fd5b81019080803590602001909291905050506087565b005b60008054905090565b806000819055505056fea264697066735822122068f8f363cd73379ed8e80cdcbd049195afa8fdd1952249670cdf84490e5fdfac64736f6c63430007060033';
const contract = new web3.eth.Contract(abi);
const account = "0x3c762CAd59F889DA707a4b8Ba10dAf5Cc0B1d020";


const storage = contract.deploy({
    data: bytecode 
}).send({
     from: account, 
     gas: '4700000'
   }, (e, txHash) =>{
    console.log(e, txHash);
 }).then(storageContract=>{
     console.log("Contract Address",storageContract.options.address);
     storageContract.methods.retrieve().call((err,res)=>{
        console.log(err,res);
    });
    storageContract.methods.store(50).send({
        from: account,
        gas: '4700000'
    },(e,txHash) => {
        console.log(e,txHash);
    })
    storageContract.methods.retrieve().call((err,res)=>{
        console.log(err,res);
    });
 })

 