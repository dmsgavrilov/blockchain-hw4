import Client from './src/controller/web3Client.js';

const web3Client = new Client();

console.log(web3Client.cli.currentProvider);