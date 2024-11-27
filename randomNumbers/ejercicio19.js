// 19. Declarar una función que simule una tirada de un dado. Recibirá como argumento el número de caras del dado.
// Ejemplo: Si el número de caras es 20, el argumento será 20 y la función nos devolverá un resultado aleatorio del dado.
// Ejecutar la función 100 veces y mostrar el resultado en pantalla de cada ejecución. 

function rollingDie(faces) {
  for (let index = 0; index < 100; index++) {
    let dieValue = Math.floor(Math.random()* (faces) + 1)
    console.log(dieValue);
  }
}

rollingDie(20)