// métodos para manejar combates y mostrar atributos de mago

// función combat
export function combat(attacker, defender) {

  // calcular el daño
  const damage = attacker.level * attacker.strength + attacker.spell.damage;

  // ceducir la vida del defensor
  defender.life -= damage;

  // reducir el maná del atacante
  attacker.mana -= attacker.spell.points;

  console.log(`\n${attacker.name} atacó a ${defender.name} usando ${attacker.spell.name}`);
  console.log(`${defender.name} recibió ${damage} puntos de daño. Vida restante: ${defender.life}`);
  console.log(`${attacker.name} ahora tiene ${attacker.mana} puntos de maná.`);
}

// función para mostrar resultados
export function showAttr(mage) {
  console.log(`\n----------- Atributos de ${mage.name}`);
  console.log(`Nivel: ${mage.level}`);
  console.log(`Vida: ${mage.life}`);
  console.log(`Maná: ${mage.mana}`);
  console.log(`Fuerza: ${mage.strength}`);
  console.log(`Hechizo: ${mage.spell ? mage.spell.name : "Ninguno"}`);
  if (mage.spell) {
    console.log(`\n  Daño del Hechizo: ${mage.spell.damage}`);
    console.log(`  Coste de Maná: ${mage.spell.points}`);
  }
}