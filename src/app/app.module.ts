import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule} from "@angular/common/http";
import { DexComponent } from './pages/dex/dex.component';
import { DexDetailsComponent } from './pages/dex-details/dex-details.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeCardDetailsComponent } from './components/poke-card-details/poke-card-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DexComponent,
    DexDetailsComponent,
    PokeCardComponent,
    PokeCardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
