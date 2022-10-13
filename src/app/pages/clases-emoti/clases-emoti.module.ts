import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { ClasesEmotiPage } from './clases-emoti.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ClasesEmotiPageRoutingModule } from './clases-emoti-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasesEmotiPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClasesEmotiPage]
})
export class ClasesEmotiPageModule {}
