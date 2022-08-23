import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarDispPageRoutingModule } from './registrar-disp-routing.module';

import { RegistrarDispPage } from './registrar-disp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarDispPageRoutingModule
  ],
  declarations: [RegistrarDispPage]
})
export class RegistrarDispPageModule {}
