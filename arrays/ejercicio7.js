// 7. Declarar una función que sume cada elemento del primer array con cada elemento del segundo (en la misma posición) y devuelva el array con la suma de ambos.
// A continuación ejecutar la función y mostrar en pantalla el array de la Suma al completo.  

let arrayNum1 = [1, 23, 34];
let arrayNum2 = [6, 7, 50];

function addArray(){
  const arrayResult = [];
  let length = (arrayNum1.length >= arrayNum2.length) ? arrayNum1.length : arrayNum2.length

  for (let index = 0; index < length; index++) {
    arrayResult[index] = arrayNum1[index] + arrayNum2[index]
  }
  return console.log(arrayResult);
}

addArray()