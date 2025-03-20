// 2.- Declarar una función que recibe como parámetros a , b , c y opcion. 
// Si opcion es true multiplica a y b y divide entre c. Mostrar el resultado de la función
// Ejecutar la función. 

let a = 12;
let b = 36;
let c = 3;
let opcion = true;

function operation(a, b, c, opcion) {
  let result = a * b / c

  if (opcion) {

    return console.log("El resultado es: " + result)

  } else {
    return console.log("Option is incorrect")
  }
}

operation(a, b, c, opcion)