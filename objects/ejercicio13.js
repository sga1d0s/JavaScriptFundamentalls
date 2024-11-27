// 13. Dado el siguiente array de objetos

var elements = [
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

// Mostrar por pantalla todos los elementos cuya cantidad (qty) sea menor de 50 ((Declarar una función para ello))

function showElements() {
  // separa por elementos del array
  for (let index = 0; index < elements.length; index++) {
    let element = elements[index]
    // separa por objeto
    for (let clave in element) {
      if (element.qty < 50) {
        console.log(`${clave}: ${element[clave]}`)
      }
    }
    console.log('-------------------');
  }
}

showElements();