const Web3 = require('Web3');

const Tx     = require('ethereumjs-tx').Transaction;

const rpcUrl = 'http://localhost:7545';
//const rpcUrl = 'https://ropsten.infura.io/v3/e80fe286acd444beb4496818b416452d';
const web3 = new Web3(rpcUrl);
//Account details
//ropsten
//const sender = "0x340dE497c3c073E4d01246Dec7e94c75c8e2b199"; 
//const receiver = "0xc0e26965f7B86bE8E6662ACf74FEbAf75B2c012A"; 
//local
const sender = "0x16C591839d0bD4d862F7F2ED5d16C993130e33a1";
const receiver = '0xc0e26965f7B86bE8E6662ACf74FEbAf75B2c012A';

const PRIVATE_KEY_SENDER = "389d89cca0704b84061bedeed35afea0265fba1db6abc72963da54fc8936b2e7";
//const PRIVATE_KEY_SENDER = "93154df07c7b084df5496e9fdf04cc784e429c5d375a501f62dd71e4b7ff4e89"; //ropston
const privateKeySender = Buffer.from(PRIVATE_KEY_SENDER,'hex');

web3.eth.getTransactionCount(sender, (error, txCount) => {
    console.log(txCount);
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: receiver,
        value: web3.utils.toHex(web3.utils.toWei('2', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }    
    
 
  // Sign the transaction
  const tx = new Tx(txObject); //local
  //const tx = new Tx(txObject,{chain: 'ropsten'});
  
  tx.sign(privateKeySender);

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')
    
    // Broadcast the transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log(err);
        console.log('txHash:', txHash)
        // Now go check etherscan to see the transaction! if ropston otherwise check ganache
    })
});


