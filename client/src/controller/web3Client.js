import Web3  from 'web3'
import BaseApp from "../core/base/app.js"

class Client extends BaseApp {
    constructor() {
        super();
        this.cli = new Web3(new Web3.providers.HttpProvider(this.cfg.infuraConfig['api_endpoint']));
    }
}

export default Client;