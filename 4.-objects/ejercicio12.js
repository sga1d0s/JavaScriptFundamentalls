// 12. Dado el siguiente array de objetos.

let elements = [
  {
    code: 'SKI-203',
    name: 'Banana',
    price: 200,
    qty: 31,
    imported: true,
    type: 'Tropical'
  },
  {
    code: 'SFI-233',
    name: 'Pomelo',
    price: 55,
    qty: 325,
    imported: false,
    type: 'Tropical'
  },
  {
    code: 'JKI-453',
    name: 'Piña',
    price: 70,
    qty: 125,
    imported: false,
    type: 'Oceanic'
  },
  {
    code: 'CDC-113',
    name: 'Coco',
    price: 120,
    qty: 25,
    imported: true,
    type: 'Oceanic'
  },
  {
    code: 'SWI-265',
    name: 'Papaya',
    price: 200,
    qty: 725,
    imported: true,
    type: 'Tropical'
  }
];

// Mostrar por consola todos los elementos ((Declarar una función para ello))

function showElements() {
  // itera el array
  for (let index = 0; index < elements.length; index++) {
    let element = elements[index]
    // itera el objeto
    for (let clave in element) {
      console.log(`${clave}: ${element[clave]}`)
    }
    console.log('-------------------');
  }
}

showElements();