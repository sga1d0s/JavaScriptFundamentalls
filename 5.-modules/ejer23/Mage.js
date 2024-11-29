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
}