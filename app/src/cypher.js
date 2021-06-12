// const ecies = require("eth-ecies");
// var Wallet = require('ethereumjs-wallet');
// var EthUtil = require('ethereumjs-util');
import EthCrypto from 'eth-crypto';

// Get a wallet instance from a private key

var Web3 = require('web3');
var web3 = new Web3('http://127.0.0.1:8545');

const publicKey = 'e0d262b939cd0267cfbe3f004e2863d41d1f631ce33701a8920ba73925189f5d15be92cea3c58987aa47ca70216182ba6bd89026fc15edfe2092a66f59a14003';
const privateKey = '55bb4cb6407303de8e4c5a635021d3db12cb537305eeb6401612ce14b35d6690';
const data = '{foo:"bar",baz:42}';

export async function encrypt(publicKey, data) {
    // let userPublicKey = new Buffer(publicKey, 'hex');
    // let bufferData = new Buffer(data);

    // let encryptedData = ecies.encrypt(userPublicKey, bufferData);

    // return encryptedData.toString('base64')
//     console.log('Wallet :>> ', Wallet);
// console.log('typeof Wallet.fromPrivateKey :>> ', typeof Wallet.default.fromPrivateKey);
//     const privateKeyBuffer = EthUtil.toBuffer('0x61ce8b95ca5fd6f55cd97ac60817777bdf64f1670e903758ce53efc32c3dffeb');
//     if(typeof Wallet.default.fromPrivateKey === 'function' ) {
//         const wallet = Wallet.default.fromPrivateKey(privateKeyBuffer);

        
//         const publicKey1 = wallet.getPublicKeyString();                                                                                                                                                                                                                                                               
//         console.log('publicKey',publicKey1);
//          let userPublicKey = new Buffer(publicKey1, 'hex');
//          console.log("🚀 ~ file: cypher.js ~ line 31 ~ encrypt ~ userPublicKey", userPublicKey)
//     let bufferData = new Buffer(data);
//     console.log("🚀 ~ file: cypher.js ~ line 33 ~ encrypt ~ bufferData", bufferData)

//       let encryptedData = ecies.encrypt(userPublicKey, bufferData);

//      console.log('encryptedData.toString( base64 ) :>> ', encryptedData.toString('base64')); 
//     }

//     console.log('web3 :>> ', web3);
//     return web3.eth.accounts.encrypt(publicKey, data)
const publicKey1 = EthCrypto.publicKeyByPrivateKey(
    '0x107be946709e41b7895eea9f2dacf998a0a9124acbb786f0fd1a826101581a07'
);
console.log("🚀 ~ file: cypher.js ~ line 46 ~ encrypt ~ publicKey", publicKey)
 
   const encrypted =  await EthCrypto.encryptWithPublicKey(
        publicKey1, // publicKey
        data // message
    )
    
        console.log("🚀 ~ file: cypher.js ~ line 51 ~ encrypt ~ encrypted", encrypted)
        const strEnc =  await EthCrypto.cipher.stringify(encrypted);
        console.log("🚀 ~ file: cypher.js ~ line 53 ~ encrypt ~ strEnc", strEnc)
        return  strEnc;
    

}


export async function decrypt(cMessage) {
    const cyperObj =  EthCrypto.cipher.parse(cMessage);
    return await EthCrypto.decryptWithPrivateKey(
        '0x107be946709e41b7895eea9f2dacf998a0a9124acbb786f0fd1a826101581a07', // privateKey
        cyperObj // encrypted-data
    );
    // let userPrivateKey = new Buffer(privateKey, 'hex');
    // let bufferEncryptedData = new Buffer(encryptedData, 'base64');

    // let decryptedData = ecies.decrypt(userPrivateKey, bufferEncryptedData);
    
    // return decryptedData.toString('utf8');
    //return web3.eth.accounts.decrypt(privateKey, encryptedData)
}