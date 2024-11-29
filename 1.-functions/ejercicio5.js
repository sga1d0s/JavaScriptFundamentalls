// 5.- Declarar una función que recibe 2 números como parámetros, devuelve el mayor de los dos y si son iguales devuelve un mensaje. 
// Mostrar el resultado de la función
// Ejecutar la función. 

let a = 10;
let b = 1;


function compare(a, b) {
  // devuelve el mayor con ternario
  (a > b) ? console.log(`El numero más alto es el A que es: ${a}`) :
    (b > a) ? console.log(`El número más alto es el B que es: ${b}`) :
      console.log(`Los números son iguales`);

}

compare(a, b);