// 10. Dado un array con números positivos y negativos, declarar una función que recoja el array como argumento y realice lo siguiente:
// La función deberá crear un array nuevo con los números positivos, ordenarlos de menor a mayor y devolver el array.
// Ejecutar la función y mostrar el array ordenado. 

// PISTA: El nuevo array deberá tener una dimensión tal que: Length(nuevo) = Length(viejo) - num_elementos_negativos

let arrayNum1 = [12, -3, 34, 567, -19, 57, 0]; 

function positiveArray(arrayNum1){

  let positiveArray = []
  for (let index = 0; index < arrayNum1.length; index++) {
    if (arrayNum1[index] > 0) {
      positiveArray.push(arrayNum1[index])
    }
  }
  return positiveArray; 

}

function orderArray(positiveArray){
  for (let i = 0; i < positiveArray.length - 1; i++) {
    for (let j = i + 1; j < positiveArray.length; j++)
      if (positiveArray[i] > positiveArray[j]) {
        const aux = positiveArray[i];
        positiveArray[i] = positiveArray[j]
        positiveArray[j] = aux
      }
  }
  return console.log(positiveArray);
}

orderArray(positiveArray(arrayNum1)); 