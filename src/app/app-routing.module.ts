import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChainInfoPageComponent } from './chain-info-page/chain-info-page.component';
import { FakeBaycMetadataComponent } from './fake-bayc-metadata/fake-bayc-metadata.component';
import { FakeBaycComponent } from './fake-bayc/fake-bayc.component';
import { FakeNefturiansUserComponent } from './fake-nefturians-user/fake-nefturians-user.component';
import { FakeNefturiansComponent } from './fake-nefturians/fake-nefturians.component';

const routes: Routes = [
  { path: 'chain-info', component: ChainInfoPageComponent },
  { path: 'home', component: AppComponent },
  { path: 'fakeBayc', component: FakeBaycComponent },
  { path: 'fakeBayc/:id', component: FakeBaycMetadataComponent },
  { path: 'fakeNefturians', component: FakeNefturiansComponent },
  { path: 'fakeNefturians/:address', component: FakeNefturiansUserComponent },
  { path: 'fakeMeebits'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
