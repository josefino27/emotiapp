import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioRutinaPageRoutingModule } from './inicio-rutina-routing.module';

import { InicioRutinaPage } from './inicio-rutina.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioRutinaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InicioRutinaPage]
})
export class InicioRutinaPageModule {}
