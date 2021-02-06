import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsScannerComponent } from './pages/options-scanner/options-scanner.component';

const routes: Routes = [
  {
    path: '',
    component: OptionsScannerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
