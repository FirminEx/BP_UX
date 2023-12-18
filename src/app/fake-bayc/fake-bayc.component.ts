import { Component, OnInit } from '@angular/core';
import Web3, { Contract, ContractAbi } from 'web3';
import BaycAbi from './bayc.abi.json';

@Component({
  selector: 'app-fake-bayc',
  templateUrl: './fake-bayc.component.html',
  styleUrls: ['./fake-bayc.component.scss'],
})
export class FakeBaycComponent implements OnInit {
  web3!: Web3;
  contract!: Contract<ContractAbi>;
  tokenNumber = -1;
  name = '';
  balance = -1;

  async ngOnInit() {
    this.web3 = new Web3(window.ethereum);
    this.contract = new this.web3.eth.Contract(BaycAbi.abi, '0x1dA89342716B14602664626CD3482b47D5C2005E');
    setInterval(() => {
      this.contract.methods['tokenCounter']()
        .call()
        .then((tokenNumber: any) => (this.tokenNumber = tokenNumber));
    }, 1000);
    this.name = BaycAbi.contractName;
  }

  async claimToken() {
    const [userAccount] = await this.web3.eth.requestAccounts();
    await this.contract.methods['claimAToken']().send({ from: userAccount });
  }
}
