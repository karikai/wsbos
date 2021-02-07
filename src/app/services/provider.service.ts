import { Injectable } from '@angular/core';
import { AppState } from '../models/appState'

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
    app : AppState = new AppState();
    constructor() { }
}
