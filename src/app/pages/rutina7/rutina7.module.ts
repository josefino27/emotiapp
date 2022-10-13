import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rutina7PageRoutingModule } from './rutina7-routing.module';

import { Rutina7Page } from './rutina7.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rutina7PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Rutina7Page]
})
export class Rutina7PageModule {}
