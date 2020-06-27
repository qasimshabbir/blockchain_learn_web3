const Web3 = require('Web3');

const Tx     = require('ethereumjs-tx').Transaction;

const rpcUrl = 'http://localhost:7545';

const web3 = new Web3(rpcUrl);
//Account details
const sender = "0xa46422854EBEbE1b2422046Be4a441daf4c4f738";
const receiver = '0x9928cC7000c309ADcA90DDe6fBc1d6c9f07AEE67';

const PRIVATE_KEY_SENDER = "9dec73ac1c8ffa8edfdc9a9142a05513d288955b274d9964584898d437298d77";

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
  const tx = new Tx(txObject)
  tx.sign(privateKeySender)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')
    
    // Broadcast the transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log(err);
        console.log('txHash:', txHash)
        // Now go check etherscan to see the transaction!
    })
});


