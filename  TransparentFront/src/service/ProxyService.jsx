import abi from './abi.json';
import {Web3} from "web3";

class ProxyService {

    web3 = new Web3(window.ethereum);
    contractAddress = "0xD3c53423925F1D4a4c62da538e4F2C75BD61E165"
    contract = new this.web3.eth.Contract(abi, this.contractAddress);

    async setValue(amount, wallet) {
        await this.contract.methods.setValue(amount).send({from: wallet});
    }

    async add(amount, wallet) {
        await this.contract.methods.add(amount).send({from: wallet});
    }

    async setPaused(paused, wallet) {
        await this.contract.methods.setPaused(paused).send({from: wallet});
    }

    async sub(amount, wallet) {
        await this.contract.methods.sub(amount).send({from: wallet});
    }

    async version() {
       return await this.contract.methods.version().call();
    }

    async getInfo() {
        return await this.contract.methods.getInfo().call();
    }
}
export default new ProxyService();