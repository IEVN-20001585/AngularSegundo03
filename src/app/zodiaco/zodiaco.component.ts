import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { Zodiaco } from './Zodiaco';

@Component({
  selector: 'app-zodiaco',
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent {
formulario!: FormGroup;
  resultado: any = null;

  objZodiaco = new Zodiaco();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apaterno: new FormControl(''),
      amaterno: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      an: new FormControl(''),
      sexo: new FormControl('')
    });
  }

  Resultado(): void {
    const formValues = this.formulario.value;

    this.objZodiaco.nombre = formValues.nombre;
    this.objZodiaco.apaterno = formValues.apaterno;
    this.objZodiaco.amaterno = formValues.amaterno;
    this.objZodiaco.dia = formValues.dia;
    this.objZodiaco.mes = formValues.mes;
    this.objZodiaco.an = formValues.an;
    this.objZodiaco.sexo = formValues.sexo;

    this.objZodiaco.calcularResultado();

    this.resultado = this.objZodiaco.resultado;
  }
}