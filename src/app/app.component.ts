import { Component } from '@angular/core';
import { AppState } from './models/appState';
import { APIService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppState]
})
export class AppComponent {
  title = 'wsbos';

  constructor(
    state: AppState,
    api: APIService,
    ) {
    
  }
}
