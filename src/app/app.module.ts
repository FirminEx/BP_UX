import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChainInfoPageComponent } from './chain-info-page/chain-info-page.component';
import { FakeBaycMetadataComponent } from './fake-bayc-metadata/fake-bayc-metadata.component';
import { FakeBaycComponent } from './fake-bayc/fake-bayc.component';
import { FakeNefturiansComponent } from './fake-nefturians/fake-nefturians.component';
import { FakeNefturiansUserComponent } from './fake-nefturians-user/fake-nefturians-user.component';
import { FakeMeebitsComponent } from './fake-meebits/fake-meebits.component';

@NgModule({
  declarations: [AppComponent, ChainInfoPageComponent, FakeBaycComponent, FakeBaycMetadataComponent, FakeNefturiansComponent, FakeNefturiansUserComponent, FakeMeebitsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
