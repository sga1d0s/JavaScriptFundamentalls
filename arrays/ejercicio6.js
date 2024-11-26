// 6. Declarar una función que sume los elementos del siguiente array y devuelva la suma (como VALOR DE RETORNO). 
// A continuación ejecutar la función y mostrar en pantalla: 'Suma: XX"

var arrayNum = [1, 23, 34];

function add(arrayNum) {
  let total = 0;
  for (let index = 0; index < arrayNum.length; index++) {
    total += arrayNum[index];
  }
  return console.log(total);;
}

add(arrayNum);