import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';

@Component({
  selector: 'app-chain-info-page',
  templateUrl: './chain-info-page.component.html',
  styleUrls: ['./chain-info-page.component.scss'],
})
export class ChainInfoPageComponent implements OnInit {
  web3!: Web3;
  lastBlock!: bigint;
  chainId: any;
  userAccounts: any;
  sepoliaChainId: bigint = BigInt(11155111);

  constructor() {}

  async ngOnInit() {
    this.web3 = new Web3(window.ethereum);
    this.chainId = await this.web3.eth.getChainId();
    this.userAccounts = await this.web3.eth.requestAccounts();
    this.web3.eth.getChainId();
    setInterval(() => {
      this.web3.eth.getBlockNumber().then((blockNumber) => {
        this.lastBlock = blockNumber;
      });
    }, 100);
  }
}
