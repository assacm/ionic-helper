import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearContactoPage } from './crear-contacto.page';
import { ListaContactosPage } from '../lista-contactos/lista-contactos.page';
const routes: Routes = [
  {
    path: '',
    component: CrearContactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ListaContactosPage],
  exports: [RouterModule],
})
export class CrearContactoPageRoutingModule {}
