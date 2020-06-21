var Tx     = require('ethereumjs-tx').Transaction;
const Web3 = require('web3')
const web3 = new Web3('http://localhost:7545');

const account1 = '0xFb6058AC92F3f6216625D35cE9045A8584dc02da'; // Your account address 1
const account2 = '0xf4Bea542fAc46Fc42fC69B82A8888BD07b7dd782'; // Your account address 2

const privateKey1 = Buffer.from('615885e0f4b8e3df07677e24678c67dba9ac04255320fb5b8f49b2d5ea0fc24d', 'hex')
const privateKey2 = Buffer.from('d57c94624e46b0b0aa420a86e26a9e7754f485f4bfd3341deb0e973b1d73c6aa', 'hex')

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    to:       account2,
    value:    web3.utils.toHex(web3.utils.toWei('1', 'ether')),
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
    console.log('txHash:', txHash)
    // Now go check etherscan to see the transaction!
  })
})
