// 1.- Declarar una función que recibe como parámetros a, b y c. Suma los elementos y devuelve la media. Mostrar el resultado de la función
// Ejecutar la función. 

let a = 12;
let b = 36;
let c = 3;

function sum(a, b, c) {
  let suma = a + b + c;
  let media = suma / 3;
  return console.log("La media es: " + media);
}

sum(a, b, c)
