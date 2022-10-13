import { Component, Input, OnInit } from '@angular/core';
import { Clase } from '../../interface/index';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.scss'],
})
export class ClaseComponent implements OnInit {

@Input() clase: Clase;
@Input() indice: number;



  constructor() { }

  ngOnInit() {
    
  }
  
}
