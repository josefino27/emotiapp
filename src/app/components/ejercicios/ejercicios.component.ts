import { Component, Input, OnInit } from '@angular/core';
import { Result, Resultt } from 'src/app/interface';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.scss'],
})
export class EjerciciosComponent implements OnInit {

  @Input() rutinas: Result[] = [];
  @Input() x: Resultt[] = []
  
 
  constructor() { }


  ngOnInit() {    

  }
}
