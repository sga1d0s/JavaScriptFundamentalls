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