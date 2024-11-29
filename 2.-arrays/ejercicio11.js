// 11. Se dan dos números en forma de array. Se trata de declarar una función que los recoja como argumento, 
// los sume y devuelva el array con el número SUMA.
// Ejemplo: 123 = [1,2,3]
//          458 = [4,5,6]
//   SUMA:  581 = [5,8,1]
// 
// NOTA: Por simplicidad los dos arrays deberán tener la misma dimensión. 
// PISTA: La dimensión del array de devolución sera la dimensión de los arrays de entrada + 1. 
// Además, habrá que tener en cuenta el acarreo (la llevada). 
// Se trata de SUMAR TAL Y COMO LO HARÍAIS EN PAPEL, de derecha a izquierda.
// 

//  Ejecutaremos la función y sacaremos en pantalla un texto en la forma: '123 + 458 = 581' (En el caso del ejemplo)

//  Podéis hacer pruebas con diferentes números. Como ejemplo se dan los números 976 y 385. 

let arrayNum1 = [9, 7, 6];
let arrayNum2 = [3, 8, 5];
let arrayAddValues = [0, 0, 0, 0];

// suma los dos arrays y lo guarda en un tercero
function arrayAdd(arrayNum1, arrayNum2) {
  for (let index = arrayNum1.length - 1; index >= 0; index--) {
    let value = arrayNum1[index] + arrayNum2[index]
    if (value >= 10) {
      arrayNum1[index - 1] = arrayNum1[index - 1] + 1
      value = value - 10
      arrayAddValues[index + 1] = value
      arrayAddValues[0] = 1
    } else {
      arrayAddValues[index + 1] = value
    }
  }
  if (arrayAddValues[0] === 0) {
    arrayAddValues.splice(0, 1)
  }
  return arrayAddValues;
}

// pasa los valores de una array a texto
function passText(array) {
  let text = "";
  for (let index = 0; index < array.length; index++) {
    text = text + array[index];
  }
  return text;
}

// función principal muestra resultado
function displayResult() {
  console.log(passText(arrayNum1) + " + " + passText(arrayNum2) + " = " + passText(arrayAdd(arrayNum1, arrayNum2)));
}

displayResult();