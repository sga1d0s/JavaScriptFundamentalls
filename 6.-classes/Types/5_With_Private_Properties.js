/* 
5. Clases con Propiedades Privadas
Se usa # para definir atributos privados que no pueden ser accedidos fuera de la clase.
Ejemplo de propiedad privada 
*/

class CuentaBancaria {
  #saldo;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  depositar(monto) {
    this.#saldo += monto;
  }

  obtenerSaldo() {
    return this.#saldo;
  }
}

// Uso
const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);
console.log(cuenta.obtenerSaldo()); // 1500
console.log(cuenta.#saldo); // Error: Propiedad privada
