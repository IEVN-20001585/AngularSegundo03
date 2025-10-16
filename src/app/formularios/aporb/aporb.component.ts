import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {sumar} from  './b';

@Component({
  selector: 'app-aporb',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './aporb.component.html',
  styleUrl: './aporb.component.css'
})
export class AporbComponent {
formulario!: FormGroup;
  resultado!: number;
  
  objMult = new sumar();

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      a: new FormControl(''),
      b: new FormControl('')
    });
  }
  realizarMultiplicacion(): void {
    
    this.objMult.a = parseInt(this.formulario.value.a);
    this.objMult.b = parseInt(this.formulario.value.b);

    this.objMult.multiplicar();
    
    this.resultado = this.objMult.resultado;
  }
}