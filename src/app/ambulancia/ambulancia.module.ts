import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmbulanciaPageRoutingModule } from './ambulancia-routing.module';

import { AmbulanciaPage } from './ambulancia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmbulanciaPageRoutingModule
  ],
  declarations: [AmbulanciaPage]
})
export class AmbulanciaPageModule {}
