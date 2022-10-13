import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/services/workout.service';
import { Resultt } from '../../interface/index';

@Component({
  selector: 'app-rutina-ejercicios',
  templateUrl: './rutina-ejercicios.page.html',
  styleUrls: ['./rutina-ejercicios.page.scss'],
})
export class RutinaEjerciciosPage implements OnInit {

  rutinas: Resultt[]=[];

  constructor(private work:WorkoutService) { }



  ngOnInit() {
    this.cargarRutina();
    
  }
    loadData(event) {
      this.cargarRutina(event);
    }
    cargarRutina(event?){
      this.work.obtenerDatos()
      .subscribe(
          resp => {
            this.rutinas.push(...resp.results);
            if(event){
              event.target.complete();
            }
        }
      );
      console.log(this.rutinas)
    }
    // this.work.obtenerRutina()
    // .subscribe(
    //   resp => {
    //    this.rutinas.push(...resp.results);
    //   }
    // );
  }
