import { Component } from '@angular/core';
import { AppState } from './models/appState';
import { APIService } from './services/api.service';
import { ProviderService } from './services/provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProviderService]
})
export class AppComponent {

  constructor(
    state: ProviderService,
    api: APIService,
    ) {
    
  }
}
