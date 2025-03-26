// Ejemplo 2: Factoría con Personalización

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
 
/* 
¿Cuándo Usar una Clase Factoría?
✔ Cuando necesitas ocultar la complejidad de la creación de objetos.
✔ Si quieres devolver diferentes tipos de instancias sin que el código cliente las instancie directamente.
✔ En situaciones donde los objetos tienen configuraciones variables que pueden cambiar en el futuro.
Alternativa: Funciones Factoría
Si solo necesitas una forma simple de crear objetos, puedes usar una función factoría en lugar de una clase: 
*/

function crearUsuario(nombre, tipo) {
  const roles = { admin: "Administrador", user: "Usuario", guest: "Invitado" };
  return { nombre, rol: roles[tipo] || "Usuario" };
}

const user = crearUsuario("Laura", "user");
console.log(user); // { nombre: 'Laura', rol: 'Usuario' }
 
/* 
Conclusión
Las clases factoría son una forma estructurada de crear objetos en JavaScript, permitiendo mayor flexibilidad y encapsulación 
de la lógica de creación. Son especialmente útiles cuando se requiere modificar la manera en que los objetos son instanciados 
sin afectar el resto del código. 
*/