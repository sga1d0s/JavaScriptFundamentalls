// 17. Declarar una función que reciba como argumento un número y calcule un número aleatorio entero entre 0 y el número introducido (ambos inclusive)
// Ejemplo: Si el argumento es el 8, la función nos deberái devolver 0, 1, 2, 3, 4, 5, 6, 7, u 8.
// Ejecutar la función 100 veces y mostrar el resultado en pantalla de cada ejecución.

function randomNumber(max){
  for (let index = 0; index < 100; index++) {
    let randomNumber = Math.floor(Math.random() * (max + 1))
    console.log(randomNumber);
  }
}

randomNumber(8)