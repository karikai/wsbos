import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { OptionsScannerComponent } from './pages/options-scanner/options-scanner.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'scanner',
    component: OptionsScannerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
