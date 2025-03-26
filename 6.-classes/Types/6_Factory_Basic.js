/* 
Clases Factoría en JavaScript
¿Qué es una Clase Factoría?
Una clase factoría en JavaScript es una clase cuyo objetivo principal es crear y devolver instancias de objetos. Se usa para encapsular la lógica de creación y hacer el código más flexible y mantenible.
Ventajas de usar una Clase Factoría
1.	Encapsulación de la lógica de creación en un solo lugar.
2.	Facilita la extensibilidad, permitiendo modificar la creación sin afectar el código cliente.
3.	Uso del Patrón Factory Method, permitiendo delegar la creación de objetos a una método especializado.
4.	Reutilización del código, evitando redundancia.
 
Ejemplo 1: Factoría Básica 
*/

class Vehiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  mostrarInfo() {
    return `Vehículo: ${this.marca} ${this.modelo}`;
  }
}

class VehiculoFactory {
  static crearVehiculo(tipo) {
    switch (tipo) {
      case "auto":
        return new Vehiculo("Toyota", "Corolla");
      case "moto":
        return new Vehiculo("Yamaha", "R6");
      default:
        throw new Error("Tipo de vehículo no válido");
    }
  }
}

// Uso de la fábrica
const auto = VehiculoFactory.crearVehiculo("auto");
console.log(auto.mostrarInfo()); // Vehículo: Toyota Corolla

const moto = VehiculoFactory.crearVehiculo("moto");
console.log(moto.mostrarInfo()); // Vehículo: Yamaha R6

//Ejemplo 2: Factoría con Personalización

class Usuario {
  constructor(nombre, rol) {
    this.nombre = nombre;
    this.rol = rol;
  }

  mostrarInfo() {
    return `${this.nombre} tiene el rol de ${this.rol}`;
  }
}

class UsuarioFactory {
  static crearUsuario(nombre, tipo) {
    const roles = {
      admin: "Administrador",
      user: "Usuario",
      guest: "Invitado"
    };
    
    return new Usuario(nombre, roles[tipo] || "Usuario");
  }
}

// Uso de la fábrica
const admin = UsuarioFactory.crearUsuario("Carlos", "admin");
console.log(admin.mostrarInfo()); // Carlos tiene el rol de Administrador

const invitado = UsuarioFactory.crearUsuario("Ana", "guest");
console.log(invitado.mostrarInfo()); // Ana tiene el rol de Invitado

/* ¿Cuándo Usar una Clase Factoría?
✔ Cuando necesitas ocultar la complejidad de la creación de objetos.
✔ Si quieres devolver diferentes tipos de instancias sin que el código cliente las instancie directamente.
✔ En situaciones donde los objetos tienen configuraciones variables que pueden cambiar en el futuro.
Alternativa: Funciones Factoría
Si solo necesitas una forma simple de crear objetos, puedes usar una función factoría en lugar de una clase: */

function crearUsuario(nombre, tipo) {
  const roles = { admin: "Administrador", user: "Usuario", guest: "Invitado" };
  return { nombre, rol: roles[tipo] || "Usuario" };
}

const user = crearUsuario("Laura", "user");
console.log(user); // { nombre: 'Laura', rol: 'Usuario' }

