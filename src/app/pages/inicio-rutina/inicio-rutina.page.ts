import { Component, Input, OnInit } from '@angular/core';
import { Result,Clase } from '../../interface/index';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-rutina',
  templateUrl: './inicio-rutina.page.html',
  styleUrls: ['./inicio-rutina.page.scss'],
})
export class InicioRutinaPage implements OnInit {

cantidad= 0;
@Input() rutina: Result;
@Input() clases: Clase;


constructor(private menu: MenuController) { }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  ngOnInit() { console.log(this.clases); }

}


