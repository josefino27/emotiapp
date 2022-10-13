import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calcular-imc',
  templateUrl: './calcular-imc.page.html',
  styleUrls: ['./calcular-imc.page.scss'],
})
export class CalcularImcPage implements OnInit {


  altura:number
  peso: number
  resultado: number
  alturaalcuadrado: number
  alturam:number

  constructor() { }

  
  ngOnInit() {
  
  }

  imc(){
    
    return this.calcularImc()
  }
  
  reset(){
    return location.reload();
  }
  calcularImc(){
    this.alturam=this.altura/100;
    this.alturaalcuadrado=this.alturam*this.alturam;
    this.resultado = this.peso/this.alturaalcuadrado;
    console.log(this.resultado)
    return this.resultado
  }

}