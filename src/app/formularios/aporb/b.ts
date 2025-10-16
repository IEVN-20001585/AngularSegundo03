
export class sumar {
  a: number = 0;
  b: number = 0;
  resultado: number = 0;

  multiplicar(): void {
  this.resultado = 0;
  let contador = 0; 

  while (contador < this.b) {
    this.resultado += this.a; 
    contador++; 
  }
  
}
}