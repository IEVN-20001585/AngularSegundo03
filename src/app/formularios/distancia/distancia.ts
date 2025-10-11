export class Distancia {
  // Propiedades para las coordenadas de entrada
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
 difX: number = 0;
  difY: number = 0;
    resultado: number = 0;
  calcular(): void {
    
    this.difX = this.x2 - this.x1;
    this.difY = this.y2 - this.y1;

     
     this.resultado = (this.difX ** 2 + this.difY ** 2) ** 0.5;
  }
}