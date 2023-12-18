import { Component, OnInit } from '@angular/core';
import Web3, { Contract, ContractAbi } from 'web3';
import MeebitsAbi from './meebits.abi.json';

@Component({
  selector: 'app-fake-meebits',
  templateUrl: './fake-meebits.component.html',
  styleUrls: ['./fake-meebits.component.scss'],
})
export class FakeMeebitsComponent implements OnInit {
  web3!: Web3;
  contract!: Contract<ContractAbi>;

  ngOnInit() {
    this.web3 = new Web3(window.ethereum);
    this.contract = new this.web3.eth.Contract(MeebitsAbi.abi, '0xD1d148Be044AEB4948B48A03BeA2874871a26003 ');
  }

  mintToken() {
    
  }
}
