import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RutinaEjerciciosPageRoutingModule } from './rutina-ejercicios-routing.module';

import { RutinaEjerciciosPage } from './rutina-ejercicios.page';
import { InicioRutinaPageModule } from '../inicio-rutina/inicio-rutina.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaEjerciciosPageRoutingModule,
    InicioRutinaPageModule,
    ComponentsModule
  ],
  declarations: [RutinaEjerciciosPage]
})
export class RutinaEjerciciosPageModule {}
