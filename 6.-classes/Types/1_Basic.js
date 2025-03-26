/* 
Esquema de Clases en JavaScript
1. Clases Básicas
Las clases en JavaScript son una forma de definir estructuras de objetos con propiedades y métodos.
Ejemplo de una clase simple 
*/

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }
}

// Uso
const persona1 = new Persona("Juan", 30);
console.log(persona1.saludar());
