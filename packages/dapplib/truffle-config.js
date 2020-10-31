require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone foot charge razor outside pulp gesture cover army genre'; 
let testAccounts = [
"0x194d111ed4b674910f03c8ab2355c358442d3bdcc38021a8f61056dbbe609ffd",
"0x1d84d9d9685e4d18f9830d00a6febb30b22ebfa5c9ac5cd39f4316bbd560a8a0",
"0x00fe1cf4b67b25654b39649cedf3d4161919fb090b9b8542be837318411c1d83",
"0x67e013639562667bd016041da9042deb55daa2d909b704afa0c3e5abef812cd6",
"0xf4f13f8a56cf3c1d37d148dff407cec08cda1af57bde478874d963f927013379",
"0x0753e5516864a28c611926c97a57d990d46a25194bab8e92a064c3f777c76b14",
"0x29d04338471d50ad5b466893d3b19e5f7d95e00a5a789c1ea67211189d7322f8",
"0x328f34d09234d0483aede2136061992874943e8bea87c68c1312530444af0845",
"0xb8e6f7055a40e34757cb0e7a3dea1982b1b694234d926f2c1f89b9f1d1cba57f",
"0xf3174789b640d9f857760848c438936a7b8f9d7c77bca41e51b8ede3b53991dd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
