import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/services/workout.service';
import { Clase } from '../../interface/index';

@Component({
  selector: 'app-clases-emoti',
  templateUrl: './clases-emoti.page.html',
  styleUrls: ['./clases-emoti.page.scss'],
})
export class ClasesEmotiPage implements OnInit {

  clases: Clase[]=[];

  constructor(private work:WorkoutService) { }



  ngOnInit() {
    this.cargarRutina();
    
  }
    loadData(event) {
      this.cargarRutina(event);
    }
    cargarRutina(event?){
      this.work.obtenerDatos2()
      .subscribe(
          resp => {
            this.clases.push(...resp.clases);
            if(event){
              event.target.complete();
            }
        }
      );
    }
    // this.work.obtenerRutina()
    // .subscribe(
    //   resp => {
    //    this.rutinas.push(...resp.results);
    //   }
    // );
  }
