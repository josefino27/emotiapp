import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rutina7Page } from './rutina7.page';

const routes: Routes = [
  {
    path: '',
    component: Rutina7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rutina7PageRoutingModule {}
