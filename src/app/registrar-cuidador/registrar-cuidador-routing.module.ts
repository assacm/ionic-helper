import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarCuidadorPage } from './registrar-cuidador.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarCuidadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarCuidadorPageRoutingModule {}
