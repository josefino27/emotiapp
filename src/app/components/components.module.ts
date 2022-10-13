import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronometrometroComponent } from './cronometrometro/cronometrometro.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { IonicModule } from '@ionic/angular';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { HeaderComponent } from './header/header.component';
import { ClaseComponent } from './clase/clase.component';
import { ClasesComponent } from './clases/clases.component';



@NgModule({
  declarations: [
    CronometrometroComponent,
    EjerciciosComponent,
    EjercicioComponent,
    HeaderComponent,
    ClaseComponent,
    ClasesComponent

  ],
  exports: [EjerciciosComponent, EjercicioComponent, HeaderComponent, ClaseComponent, ClasesComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
