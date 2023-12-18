import { Component, OnInit } from '@angular/core';
import Web3, { Contract, ContractAbi } from 'web3';
import NefturiansAbi from './nefturians.abi.json';

@Component({
  selector: 'app-fake-nefturians',
  templateUrl: './fake-nefturians.component.html',
  styleUrls: ['./fake-nefturians.component.scss'],
})
export class FakeNefturiansComponent implements OnInit {
  web3!: Web3;
  contract!: Contract<ContractAbi>;
  minimumTokenPrice = -1;

  async ngOnInit() {
    this.web3 = new Web3(window.ethereum);
    this.contract = new this.web3.eth.Contract(NefturiansAbi.abi, '0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED');
    this.minimumTokenPrice = await this.contract.methods['tokenPrice']().call();
    this.minimumTokenPrice++;
  }

  async buyToken() {
    const [userAccount] = await this.web3.eth.requestAccounts();
    await this.contract.methods['buyAToken']().send({ from: userAccount, value: String(this.minimumTokenPrice) });
  }
}
