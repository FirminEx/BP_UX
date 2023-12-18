import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import Web3, { Contract, ContractAbi } from 'web3';
import NefturiansAbi from './nefturians.abi.json';

@Component({
  selector: 'app-fake-nefturians-user',
  templateUrl: './fake-nefturians-user.component.html',
  styleUrls: ['./fake-nefturians-user.component.scss'],
})
export class FakeNefturiansUserComponent implements OnInit {
  address: string | null = '';
  web3!: Web3;
  contract!: Contract<ContractAbi>;
  tokenIds: any[] = [];
  error = '';
  tokens: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
  ) {}

  async ngOnInit() {
    try {
      this.address = this.route.snapshot.paramMap.get('address');
      this.web3 = new Web3(window.ethereum);
      this.contract = new this.web3.eth.Contract(NefturiansAbi.abi, '0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED');

      const tokenNumber = await (this.contract.methods['balanceOf'] as any)(this.address).call();
      this.tokenIds = await Promise.all(
        [...Array(Number(tokenNumber))].map((_, index) =>
          (this.contract.methods['tokenOfOwnerByIndex'] as any)(this.address, index).call(),
        ),
      );

      const tokenUris = await Promise.all(
        this.tokenIds.map((tokenId) => (this.contract.methods['tokenURI'] as any)(tokenId).call()),
      );

      this.tokens = await Promise.all(tokenUris.map((uri) => lastValueFrom(this.httpClient.get(uri))));
      console.log(this.tokens);
    } catch (err) {
      this.error = 'There was an error fetching the nfts';
    }
  }

  mapAttribute(attribute: any[]): string {
    return attribute.reduce(
      (accumulator, current) => accumulator + ', ' + current.trait_type + ': ' + current.value,
      '',
    );
  }
}
