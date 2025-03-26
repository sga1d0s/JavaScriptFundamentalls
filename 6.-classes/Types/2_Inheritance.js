/* 
2. Herencia en Clases
Permite que una clase hija herede propiedades y métodos de una clase padre.
Ejemplo de herencia 
*/

import Persona from "./1_Basic.js"

class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    super(nombre, edad);
    this.carrera = carrera;
  }

  estudiar() {
    return `${this.nombre} está estudiando ${this.carrera}.`;
  }
}

// Uso
const estudiante1 = new Estudiante("Ana", 22, "Ingeniería");
console.log(estudiante1.saludar());
console.log(estudiante1.estudiar());
