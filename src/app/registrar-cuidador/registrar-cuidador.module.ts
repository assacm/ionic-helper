import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarCuidadorPageRoutingModule } from './registrar-cuidador-routing.module';

import { RegistrarCuidadorPage } from './registrar-cuidador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarCuidadorPageRoutingModule
  ],
  declarations: [RegistrarCuidadorPage]
})
export class RegistrarCuidadorPageModule {}
