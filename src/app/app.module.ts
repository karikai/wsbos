import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { OptionsScannerComponent } from './pages/options-scanner/options-scanner.component';
import { ThousandSuffPipe } from './pipes/thousand-suff.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    SignUpComponent,
    LoginComponent,
    OptionsScannerComponent,
    ThousandSuffPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
