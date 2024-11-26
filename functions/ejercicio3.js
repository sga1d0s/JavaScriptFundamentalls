// 3.- Declarar una función que muestre los números impares de 0 a 100. Mostrar el resultado de la función
// Ejecutar la función. 

function oddNumber(){
  for (let index = 1; index < 101; index++) {
    if (index % 2 !== 0) {
      console.log(index);
    }
  }
}

oddNumber()