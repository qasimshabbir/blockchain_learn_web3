const Web3 = require('Web3');

const Tx     = require('ethereumjs-tx').Transaction;

const rpcUrl = 'http://localhost:7545';

const web3 = new Web3(rpcUrl);

const account1 = "0x3517a50F0f450aB286717838ed058934f55264BE";
const account2 = '0x38b628418104440BC3F0ED861ED00C8df4dD8576';

const PRIVATE_KEY_1 = "5c37e6835f41a5d1bd0886ce691ab4deddcb257951d66b0f57baa1ec1b4fb35e";
const PRIVATE_KEY_2 = "94a4c06e599ad36a0198dc2dee8b30d12d45343077dd41892fa014bfec3a9a40";

const privateKey1 = Buffer.from(PRIVATE_KEY_1,'hex');
const privateKey2 = Buffer.from(PRIVATE_KEY_2,'hex');

web3.eth.getTransactionCount(account1, (error, txCount) => {
    console.log(txCount);
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('2', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }    
    
 
  // Sign the transaction
  const tx = new Tx(txObject)
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')
    
    // Broadcast the transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log(err);
        console.log('txHash:', txHash)
        // Now go check etherscan to see the transaction!
    })
});


