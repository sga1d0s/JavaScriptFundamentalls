/* Matriz de 6x6 donde todo son X menos la posición del jugador que es un O
  el programa debe preguntar donde quiero ir y puedo elegir arriba, abajo izquierda o derecha
  para moverme por la matriz. Si el jugador está en el borde no lo puede rebasar.
 */

import readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

// Configuración inicial
const rows = 6;
const cols = 6;
let position = { x: 0, y: 0 };

// Función para mostrar la parrilla
function displayGrid() {
  console.clear();
  for (let i = 0; i < rows; i++) {
    let row = '';
    for (let j = 0; j < cols; j++) {
      if (i === position.y && j === position.x) {
        row += ' O ';
      } else {
        row += ' X ';
      }
    }
    console.log(row);
  }
}

// Función para manejar el movimiento
function move(direction) {
  switch (direction.toLowerCase()) {
    case 'arriba':
      if (position.y > 0) position.y--;
      break;
    case 'abajo':
      if (position.y < rows - 1) position.y++;
      break;
    case 'izquierda':
      if (position.x > 0) position.x--;
      break;
    case 'derecha':
      if (position.x < cols - 1) position.x++;
      break;
    default:
      console.log('Dirección no válida. Usa: arriba, abajo, izquierda, derecha.');
  }
  displayGrid();
}

// Función principal
function main() {
  displayGrid();
  rl.question('¿A dónde quieres ir? (arriba, abajo, izquierda, derecha): ', function(direction) {
    move(direction);
    main();
  });
}

// Iniciar el programa
main();
