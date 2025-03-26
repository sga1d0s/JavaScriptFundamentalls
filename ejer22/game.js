function desgloseEuros(euros) {
  const billetesYMonedas = [200, 100, 50, 20, 10, 5, 2, 1];
  const resultado = [];

  for (let i = 0; i < billetesYMonedas.length; i++) {
    const valor = billetesYMonedas[i];
    const cantidad = Math.floor(euros / valor);
    if (cantidad > 0) {
      resultado.push({ valor: valor, cantidad: cantidad });
      euros -= cantidad * valor;
    }
  }

  return resultado;
}

function mostrarDesglose(euros) {
  const desglose = desgloseEuros(euros);
  const partes = [];

  for (let i = 0; i < desglose.length; i++) {
    const item = desglose[i];
    const tipo = item.valor >= 5 ? 'billete' : 'moneda';
    const texto = `${item.cantidad} ${tipo}${item.cantidad > 1 ? 's' : ''} de ${item.valor} euro${item.valor > 1 ? 's' : ''}`;
    partes.push(texto);
  }

  const mensaje = `${euros} euros: ${partes.join(', ').replace(/, ([^,]*)$/, ' y $1')}.`;
  console.log(mensaje);
}

// Ejemplo
mostrarDesglose(28);
// Salida esperada: 28 euros: 1 billete de 20 euros, 1 billete de 5 euros, 1 moneda de 2 euros y 1 moneda de 1 euro.