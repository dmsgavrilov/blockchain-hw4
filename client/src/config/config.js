import * as fs from 'fs';


class Config {
    constructor(filename) {
        let rawdata = fs.readFileSync(filename);
        this.infuraConfig = JSON.parse(rawdata);
    }
}

const config = new Config('config.json')

export default config;