import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarDispPage } from './registrar-disp.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarDispPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarDispPageRoutingModule {}
