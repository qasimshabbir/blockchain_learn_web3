const { assert } = require("chai");

const Marketplace = artifacts.require('./Marketplace.sol');

contract('Marketplace', (accounts) => {
    let marketplace

    before(async ()=>{
        marketplace = await Marketplace.deployed();
    })

    describe('deployment', async () => {
        it('deploys successfully', async () => {
          const address = await marketplace.address
          assert.notEqual(address, 0x0)
          assert.notEqual(address, '')
          assert.notEqual(address, null)
          assert.notEqual(address, undefined)
        })

        it('has name', async ()=>{
            const name = await marketplace.name()
            assert.equal(name,'Dapp Marketplace')
        })
    
    })
    
    describe('products', async () =>{
        let result,productCount

        before(async ()=>{
            result = await marketplace.createProduct(
                "Test Product",
                10
            );
            productCount = await marketplace.productCount()
        })
        it('product created', async ()=>{
            assert.equal(productCount,1)

        })
    })
})