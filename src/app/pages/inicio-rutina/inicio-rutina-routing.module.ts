import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioRutinaPage } from './inicio-rutina.page';

const routes: Routes = [
  {
    path: '',
    component: InicioRutinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioRutinaPageRoutingModule {}
