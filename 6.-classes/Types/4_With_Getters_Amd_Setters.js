/* 
4. Clases con Getters y Setters
Permiten definir métodos especiales para acceder y modificar propiedades.
Ejemplo de getter y setter 
*/

class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  get area() {
    return this.ancho * this.alto;
  }

  set dimensiones({ ancho, alto }) {
    this.ancho = ancho;
    this.alto = alto;
  }
}

// Uso
const rect = new Rectangulo(4, 5);
console.log(rect.area); // 20
rect.dimensiones = { ancho: 6, alto: 7 };
console.log(rect.area); // 42
