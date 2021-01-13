require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remain mistake hidden arena fog student'; 
let testAccounts = [
"0xd7c5dd95a0c3ed0abcfaddb8d22c619066e1fbde6a5f68843812d052dffeba3d",
"0x0ceb91b2bbbb2297c9e11acd204565063685f9232f86eab98a6a2caf2f4de994",
"0x6a6a96060b68c3818ae822051c8f648849851cff4d5f816fbcc5df8be81b6882",
"0x254f1347c4116287991f878b88ec2cb39c6aee375aa31cc5266355aa5c9a6500",
"0x932aad609617bdb0a31ca463c0cac702f635ca6aad4b4a7bb0f572b44db96d3a",
"0xf6bed5e33103ed66372419536f2f5304d6c2c8e73ab0bec2bbd069212dc02cfb",
"0xd4e1f83b0e8a16c73f024f5f018365be540982170afcef6da34ff857ad8db6d6",
"0x365353e4f56d360d5bd56fc0886c5482b891ad8e85fbb0b6850ea291606da56d",
"0x4ca720649279496de1c306a1b8917b6a72119d4f1fd0f99aca19204524292e30",
"0x871b989fd5a2803faf342c5a60524bd83270027b5af0cf91f213b8ec501f0c92"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
