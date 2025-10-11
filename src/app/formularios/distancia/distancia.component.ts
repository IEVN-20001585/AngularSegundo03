import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
   formulario!: FormGroup;
  resultado!: number;

  objDist = new Distancia();

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      x1: new FormControl(''),
      y1: new FormControl(''),
      x2: new FormControl(''),
      y2: new FormControl('')
    });
  }

  calcularDistancia(): void {
    this.objDist.x1 = this.formulario.value.x1;
    this.objDist.y1 = this.formulario.value.y1;
    this.objDist.x2 = this.formulario.value.x2;
    this.objDist.y2 = this.formulario.value.y2;

    this.objDist.calcular();
    
  
    this.resultado = this.objDist.resultado;
  }
}

/* 
  formulario!:FormGroup;
  resultado!:number;
  objMult=new Multiplica(); 

  constructor(){  }
  ngOnInit():void {
    this.formulario = new FormGroup({
      numero1:new FormControl(''),
      numero2:new FormControl('')
    });
  }
  multNumeros():void{

    this.objMult.numero1 = this.formulario.value.numero1


    const numero1=this.formulario.get('numero1')?.value;
     const numero2=this.formulario.get('numero2')?.value;
     this.resultado=numero1*numero2;
  }
 */

