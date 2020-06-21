const Web3 = require('Web3');

const rpcUrl = 'http://localhost:7545';

const web3 = new Web3(rpcUrl);

web3.eth.getBlockNumber().then(console.log);
web3.eth.getBlock('latest').then(console.log);

web3.eth.getBlockNumber().then((latest) => {
    for (let i = 0; i < 5; i++) {
      web3.eth.getBlock(latest - i).then(console.log)
    }
})

let hash = '0xfdec00d9c5938f1e20232284145f324e637ec6368f4e08fa86e0d0a14e5b3dbd';
web3.eth.getTransactionFromBlock(hash,2).then(console.log);