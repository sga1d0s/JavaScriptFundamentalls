// 20.- Dado el siguiente array de objetos

let data = [
  {
    name: 'Banana',
    price: 200,
    qty: 31,
    imported: true
  },
  {
    name: 'Pomelo',
    price: 55,
    qty: 325,
    imported: false
  },
  {
    name: 'Piña',
    price: 70,
    qty: 125,
    imported: false
  }
]

// a) Declarar una función que recibe un objeto. 
// b) Dentro de esa función se modifica el price en base a unas tasas que son el 20%. 
// c) Devolver el objeto modificado 
// d) Declarar una función que recibe ese objeto.
// e) Añadir a ese objeto un nuevo atributo id con un número aleatorio de 3 cifras + los 3 primeros caracteres del nombre 
// f) Devolver el objeto modificado 
// g) Declarar otra función para que muestre por consola algo asi:
//		
//		id: 735Ban
//		Product: Banana
//		Price : 200
//		imported: true
//		.................

// funcion modifica tasas
function taxMod(data) {
  // pasar datos a 'dataTaxMod' para mantener los datos originales
  let dataTaxMod = data
  // iterar sobre el array
  for (let index = 0; index < dataTaxMod.length; index++) {
    const element = dataTaxMod[index]
    // iterar sobre cada objeto
    for (let key in element) {
      if (key === "price") {
        let temp = element[key] * 1.2
        element[key] = element[key] * 1.2
      }
    }
  }
  return dataTaxMod;
}

// funcion añadir ID
function addId(dataTaxMod) {
  let dataAddId = dataTaxMod;
  for (let index = 0; index < dataAddId.length; index++) {
    const element = dataAddId[index]
    // guardar en 'id' el número aleatorio
    let random = Math.floor(Math.random() * 999 + 1)
    // buscar el nombre
    for (element.id in element){
      // añadir las tres primeras letras a id
      element.id = element.name.substring(0,3)
    }
    // añadir el número random de 3 dígitos a id
    dataAddId[index].id = dataAddId[index].id + random

  }
  return dataAddId;
}
// funcion pintar datos
function printData(data){
  // iterar array
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    // iterar objeto
    for (let key in element){
      console.log(`${key}: ${element[key]}`);
    }
    console.log('-----------------');
  }
}

printData(addId(taxMod(data)))