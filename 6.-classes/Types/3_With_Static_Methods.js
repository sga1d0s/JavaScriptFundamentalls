/* 
3. Clases con Métodos Estáticos
Los métodos estáticos pertenecen a la clase y no a las instancias.
Ejemplo de método estático 
*/

class Calculadora {
  static sumar(a, b) {
    return a + b;
  }
}

// Uso
console.log(Calculadora.sumar(5, 3)); // 8
