// 8. Declarar una función en la que se pase el array siguiente como argumento. 
// A continuación extraiga el elemento mayor y el menor del array, 
// y devuelva la diferencia entre ambos valores. 
// Ejecutar la función y mostrar el resultado.

// Ejemplo: let arrayNum1 = [1, 23, 34];
// La función devolvería 34-1 = 33

let arrayNum1 = [12, 23, 34, 567, 19, 57];

function arrayCheck(arrayNum1) {
  let valueMax = arrayNum1[0];
  let valueMin = arrayNum1[0];
  for (let index = 0; index < arrayNum1.length; index++) {
    valueMax = (arrayNum1[index] > valueMax) ? arrayNum1[index] : valueMax
    valueMin = (arrayNum1[index] < valueMin) ? arrayNum1[index] : valueMin
  }

  return valueMax - valueMin
}

console.log("La diferencia entre el valor más alto y el más bajod el array es " + arrayCheck(arrayNum1))