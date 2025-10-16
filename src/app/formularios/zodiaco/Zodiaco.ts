export class Zodiaco {

  nombre: string = '';
  apaterno: string = '';
  amaterno: string = '';
  dia: number = 0;
  mes: number = 0;
  an: number = 0;
  sexo: string = '';
  textoSexo: string = ''; 
  nombreCompleto: string = '';
  edad: number = 0;
  signo: string = '';
  imagenUrl: string = '';
  resultado: any = null;
  
  hoy: Date = new Date();
  mesActual: number = 0;
  diaActual: number = 0;

  

  calcularResultado(): void {
    this.nombreCompleto = `${this.nombre} ${this.apaterno} ${this.amaterno}`;
    this.calcularEdad();
    this.obtenerSignoZodiacal();
    this.determinarRutaImagen();
        if (this.sexo === 'Masculino') {
      this.textoSexo = 'Eres hombre';
    } else if (this.sexo === 'Femenino') {
      this.textoSexo = 'Eres mujer';
    }
        const nuevaDescripcion = `${this.textoSexo}, tienes ${this.edad} años.`;

    this.resultado = {
      nombre: this.nombreCompleto,
      descripcion: nuevaDescripcion,
      signo: this.signo,
      imagen: this.imagenUrl
    };
  }

  calcularEdad(): void {
    this.hoy = new Date();
    this.edad = this.hoy.getFullYear() - this.an;
    this.mesActual = this.hoy.getMonth() + 1;
    this.diaActual = this.hoy.getDate();
    
    if (this.mesActual < this.mes) {
      this.edad--;
    } else if (this.mesActual === this.mes) {
      if (this.diaActual < this.dia) {
        this.edad--;
      }
    }
  } 

  obtenerSignoZodiacal (): void {
  const residuo = this.an % 12;

  switch (residuo) {
    case 0:
      this.signo = 'Mono';
      break;
    case 1:
      this.signo = 'Gallo';
      break;
    case 2:
      this.signo = 'Perro';
      break;
    case 3:
      this.signo = 'Cerdo';
      break;
    case 4:
      this.signo = 'Rata';
      break;
    case 5:
      this.signo = 'Buey';
      break;
    case 6:
      this.signo = 'Tigre';
      break;
    case 7:
      this.signo = 'Conejo';
      break;
    case 8:
      this.signo = 'Dragón';
      break;
    case 9:
      this.signo = 'Serpiente';
      break;
    case 10:
      this.signo = 'Caballo';
      break;
    case 11:
      this.signo = 'Cabra';
      break;
  }
}

  determinarRutaImagen(): void {
   
    if (this.signo === 'Rata') {
      this.imagenUrl = 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Rata-768x657-1.jpg';
    } else if (this.signo === 'Buey') 
      {
      this.imagenUrl = 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Buey-768x657-1.jpg';
    } else if (this.signo === 'Tigre')
       {
      this.imagenUrl = 
      'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Tigre-768x657-1.jpg';
    } else if (this.signo === 'Conejo') 
      {
      this.imagenUrl = 
      'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Conejo-768x657-1.jpg';
    } else if (this.signo === 'Dragón') 
      {
      this.imagenUrl = 
      'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Dragon-768x657-1.jpg';
    } else if (this.signo === 'Serpiente') 
      {
      this.imagenUrl = 
      'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Serpiente-768x657-1.jpg';
    } else if (this.signo === 'Caballo') 
      {
      this.imagenUrl = 
      'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Caballo-768x657-1.jpg';
    } else if (this.signo === 'Cabra') 
      {
      this.imagenUrl = 
      'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Cabra-768x657-1.jpg';
    } else if (this.signo === 'Mono') 
      {
      this.imagenUrl = 
      'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Mono-768x657-1.jpg';
    } else if (this.signo === 'Gallo') 
      {
      this.imagenUrl = 
      'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Gallo-768x657-1.jpg';
    } else if (this.signo === 'Perro') 
      {
      this.imagenUrl = 
      'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Perro-768x657-1.jpg';
    } else if (this.signo === 'Cerdo') 
      {
      this.imagenUrl = 
      'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Cerdo-768x657-1.jpg';
    } else 
      {
      this.imagenUrl = 
      'https.ccl.uanl.mx/wp-content/uploads/2023/10/horoscopo.png';
    }
  }
}