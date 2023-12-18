import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import Web3, { Contract, ContractAbi } from 'web3';
import BaycAbi from './bayc.abi.json';

@Component({
  selector: 'app-fake-bayc-metadata',
  templateUrl: './fake-bayc-metadata.component.html',
  styleUrls: ['./fake-bayc-metadata.component.scss'],
})
export class FakeBaycMetadataComponent implements OnInit {
  id: string | null = '';
  web3!: Web3;
  contract!: Contract<ContractAbi>;
  image = '';
  attributes = [];
  incorrectId = false;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
  ) {}

  async ngOnInit() {
    this.web3 = new Web3(window.ethereum);
    this.contract = new this.web3.eth.Contract(BaycAbi.abi, '0x1dA89342716B14602664626CD3482b47D5C2005E');

    this.id = this.route.snapshot.paramMap.get('id');
    const id: number = await this.contract.methods['tokenCounter']().call();
    if (!Number.isInteger(Number(this.id)) || Number(this.id) >= id || Number(this.id) < 0)
      return (this.incorrectId = true);

    const result = await (this.contract.methods['tokenURI'] as any)(this.id).call({});
    const metadataRequest = this.httpClient.get(result);
    const metadata: any = await lastValueFrom(metadataRequest);

    this.image = 'https://ipfs.io/ipfs/' + metadata.image.split('://')[1];
    console.log(metadata.attributes);
    this.attributes = metadata.attributes.map((attribute: any) => `${attribute.trait_type} ${attribute.value}`);
    return;
  }
}
