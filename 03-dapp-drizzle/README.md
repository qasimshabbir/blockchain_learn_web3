# Drizzle Truffle Example with Expense Tracker Smart Contract

This example comes with everything you need to start using smart contracts from a react app with Drizzle. It includes `drizzle`, `drizzle-react` and `drizzle-react-components` to give you a complete overview of Drizzle's capabilities.

Ensure you have install 
1. Chrome Browser
2. [Ganache](https://www.trufflesuite.com/ganache)
3. [Meta Mask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)

Ganache Configuration
- It Should be setup on http://127.0.0.1:7545
- For setting up MetaMask with Ganache you may need ChainID: 1337

[Check how to add Ganache into Meta Mask](https://www.trufflesuite.com/docs/truffle/getting-started/truffle-with-metamask)

## Installation

First ensure you are in a new and empty directory.

1. Install Truffle globally and run the `truffle init` command.
    ```javascript
    npm install -g truffle
    truffle init
    ```

2. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```javascript
    // inside the development console
    compile
    migrate
    
    // outside the development console
    truffle compile
    truffle migrate
    ```

3. In the `client` directory, we run the React app. Smart contract automatically recompiled and migrated to ./client/src/contracts.
    ```javascript
    // in another terminal (i.e. not in the truffle develop prompt)
    cd client
    npm install
    npm run start
    ```

4. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
    ```javascript
    // inside the development console
    test

    // outside the development console
    truffle test
    ```

6. To build the application for production, use the build script. A production build will be in the `app/build` folder.
    ```javascript
    // ensure you are inside the app directory when running this
    npm run build
    ```

## FAQ

* __Where do I find more information about Drizzle?__

    Check out our [documentation](http://truffleframework.com/docs/drizzle/getting-started) or any of the three repositories ([`drizzle`](https://github.com/trufflesuite/drizzle), [`drizzle-react`](https://github.com/trufflesuite/drizzle-react), [`drizzle-react-components`](https://github.com/trufflesuite/drizzle-react-components)).

* __Where is my production build?__

    The production build will be in the `client/build` folder after running `npm run build` in the `client` folder.

* __Where can I find more documentation?__

    This example is a marriage of [Truffle](http://truffleframework.com/) and a React setup created with [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). Either one would be a great place to start!
