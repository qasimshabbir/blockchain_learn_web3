const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "promote child furnace come consider border choose close people install stereo output trip kind bacon";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  contracts_build_directory: './client/src/contracts/',
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten:  {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/e80fe286acd444beb4496818b416452d")
      },
      network_id: 3,
      from: "0x3914e1fDc20FBf2166B97A144c543234da1BEB67",//my ropsten account with ether
    },
    develop: {
      port: 8545
    }
  },
  compilers: {
    solc: {
      version: "0.7.0",
    },
  },
};
