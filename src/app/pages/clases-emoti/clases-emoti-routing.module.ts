import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasesEmotiPage } from './clases-emoti.page';

const routes: Routes = [
  {
    path: '',
    component: ClasesEmotiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasesEmotiPageRoutingModule {}
