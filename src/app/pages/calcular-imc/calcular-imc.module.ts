import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcularImcPageRoutingModule } from './calcular-imc-routing.module';

import { CalcularImcPage } from './calcular-imc.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CalcularImcPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CalcularImcPage]
})
export class CalcularImcPageModule {}
