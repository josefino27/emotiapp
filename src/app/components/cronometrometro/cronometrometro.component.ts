import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cronometrometro',
  templateUrl: './cronometrometro.component.html',
  styleUrls: ['./cronometrometro.component.scss'],
})
export class CronometrometroComponent implements OnInit {

  tiempo=new Date(0);
  timer=0;
  intervalo:any;

  constructor() { }

  ngOnInit() {

    this.tiempo.setHours(0,7,0,0);
    this.timer = this.tiempo.getTime();
    this.intervalo = setInterval(()=>{
      this.timer = this.timer -1000;
    },1000)

    setTimeout(()=>{
      
    });
    
  }

}
