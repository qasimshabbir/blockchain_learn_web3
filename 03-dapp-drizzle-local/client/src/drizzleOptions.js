import Storage from "./contracts/Storage.json";

const drizzleOptions = {
    contracts: [Storage],
    web3: {
        fallback: {
            type: "ws",
            url: "ws://127.0.0.1:7545"
        }
    }
};

export default drizzleOptions;