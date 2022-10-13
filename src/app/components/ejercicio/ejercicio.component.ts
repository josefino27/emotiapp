import { Component, Input, OnInit } from '@angular/core';
import { Result, Resultt } from 'src/app/interface';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss'],
})
export class EjercicioComponent implements OnInit {

@Input() rutina: Result;
@Input() indice: number;
@Input() y: Resultt;

  constructor() { }

  ngOnInit() {
    
  }
  
}
