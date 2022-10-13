import { Component, OnInit } from '@angular/core';
import { Result, Resultt } from 'src/app/interface';
import { WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-rutina7',
  templateUrl: './rutina7.page.html',
  styleUrls: ['./rutina7.page.scss'],
})
export class Rutina7Page implements OnInit {
  rutinas: Result[] = [];
  x: Resultt[] = [];

  emocion = ['abdomen', 'brazos', 'espalda', 'pecho', 'piernas', 'hombros',];
  emociones = [10, 8, 12, 14, 11, 9, 13];

  constructor(private work: WorkoutService) { }

  ngOnInit() {

    this.cargarRutina(this.emocion[1]);

  }
  cambioEmocion(event) {
    this.rutinas = [];
    this.cargarRutina(event.detail.value);
  }
  cargarRutina(event) {

    if (event === "abdomen") {
      this.work.obtenerDatosByCategory(this.emociones[0])
        .subscribe(
          resp => {
            this.rutinas.push(...resp.results);
          }
        );
    }
    if (event === "brazos") {
      this.work.obtenerDatosByCategory(this.emociones[1])
        .subscribe(
          resp => {
            this.rutinas.push(...resp.results);
          }
        );
    }
    if (event === "espalda") {
      this.work.obtenerDatosByCategory(this.emociones[2])
        .subscribe(
          resp => {
            this.rutinas.push(...resp.results);
          }
        );
    }
    if (event === "pecho") {
      this.work.obtenerDatosByCategory(this.emociones[3])
        .subscribe(
          resp => {
            this.rutinas.push(...resp.results);
          }
        );
    }
    if (event === "piernas") {
      this.work.obtenerDatosByCategory(this.emociones[4])
        .subscribe(
          resp => {
            this.rutinas.push(...resp.results);
          }
        );
    }
    if (event === "hombros") {
      this.work.obtenerDatosByCategory(this.emociones[5])
        .subscribe(
          resp => {
            this.rutinas.push(...resp.results);
          }
        );
    }

  }
}