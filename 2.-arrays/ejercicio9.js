// 9. Dado un array, declarar una función que recoja el array como argumento y lo ordene de menor a mayor.
// Ejecutar la función y mostrar el array ordenado. 
// Nota: No se puede utilizar la función SORT de JAVASCRIPT.

let arrayNum1 = [12, 23, 34, 567, 19, 57];

// método burbuja para ordenar array de menor a mayor (Bubble sort)
function arrayOrder(arrayNum1) {
  for (let i = 0; i < arrayNum1.length - 1; i++) {
    for (let j = i + 1; j < arrayNum1.length; j++)
      if (arrayNum1[i] > arrayNum1[j]) {
        const aux = arrayNum1[i];
        arrayNum1[i] = arrayNum1[j]
        arrayNum1[j] = aux
      }
  }
  return console.log(arrayNum1);
}

arrayOrder(arrayNum1)