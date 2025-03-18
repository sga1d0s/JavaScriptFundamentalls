// clase 'Mage' como plantilla para crear magos
export class Mage {
  constructor(name, level, life, mana, strength) {
    this.name = name;
    this.level = level;
    this.life = life;
    this.mana = mana;
    this.strength = strength;
    this.spell = null;
  }

  // medoto combat
  combat(defender) {
    // calcular el daño
    const damage = this.level * this.strength + this.spell.damage;

    // ceducir la vida del defensor
    defender.life -= damage;

    // reducir el maná del atacante
    this.mana -= this.spell.points;
  }
}