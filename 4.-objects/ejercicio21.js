// 21.- Dado el siguiente array de objetos

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

// a) Crear la clase Fruit que sirva como plantilla para crear las frutas del array data
// b) Crear 3 objetos de la clase Fruit con los datos del array data.
// c) Crear un array vacío fruits y añadir los objetos creados.
// d) Crear un nuevo objeto con los siguientes campos y añadirlo al array:
//   name: 'Manzana',
//		price: 80,
//		qty: 225,
//		imported: true
// e) Crear una función que muestre en pantalla todos los objetos con precio mayor que 70, en la siguiente forma:
//  name: Banana  Price: 200
// f) Eliminar del array fruits los elementos con precio mayor que 80 y mostrar el nuevo array con los cambios. 

// a) clase Fruit
class Fruit {
  constructor(name, price, qty, imported) {
    this.name = name
    this.price= price
    this.qty = qty
    this.imported = imported
  }
}

// b) objetos clase Fruit
const banana = new Fruit(data[0].name, data[0].price, data[0].qty, data[0].imported)
const pomelo = new Fruit(data[1].name, data[1].price, data[1].qty, data[1].imported)
const pinia = new Fruit(data[2].name, data[2].price, data[2].qty, data[2].imported)

// c) array fruits
let fruits = [];
fruits = [banana, pomelo, pinia]

// d) crear nuevo objeto
const manzana = new Fruit("Manzana", 80, 225, true)

// e) funcion mostrar en pantalla articulos con un determinado precio mínimo
function printData(data, priceMin) {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (element.price > priceMin ) {
      console.log(`Name: ${element.name}   Price: ${element.price}`);
    }
  }
}

printData(fruits, 70)

// f) eliminar elementos
function deleteData(dataMod) {
  for (let j = 0; j < dataMod.length; j++) {
    const newElement = dataMod[j];
    // eliminar los elementos con precio mayor que 80
    if (newElement.price > 80) {
      dataMod.splice(j, 1)
    }
  }
}

deleteData(fruits)

printData(fruits, 0)
