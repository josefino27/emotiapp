import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcularImcPage } from './calcular-imc.page';

const routes: Routes = [
  {
    path: '',
    component: CalcularImcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcularImcPageRoutingModule {}
