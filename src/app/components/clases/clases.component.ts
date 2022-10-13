import { Component, Input, OnInit } from '@angular/core';
import { Clase, Result, Resultt } from 'src/app/interface';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss'],
})
export class ClasesComponent implements OnInit {

  @Input() clases: Clase[] = [];
 
  
 
  constructor() { }


  ngOnInit() {    

  }
}
