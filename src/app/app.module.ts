import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { StockScreenerComponent } from './pages/stock-screener/stock-screener.component';
import { AppPage } from 'e2e/src/app.po';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OptionChainComponent } from './pages/option-chain/option-chain.component';
import { StockComponent } from './pages/stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StockScreenerComponent,
    NavbarComponent,
    OptionChainComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
