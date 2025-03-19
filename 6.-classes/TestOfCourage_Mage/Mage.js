// clase Mage
export default class Mage {
  #name;
  #level;
  #attack;
  #life;
  #mana;

  constructor(name = "Pakoh", level = 1, attack = 30, life = 15, mana = 50) {
      this.#name = name;
      this.#level = level;
      this.#attack = attack;
      this.#life = life;
      this.#mana = mana;
  }

  heal(points) {
      if (this.#mana < 2) {
          return -1;
      }
      this.#life += points;
      this.#mana -= 2;
      return this.#life;
  }

  attack(target) {
      target.#life -= this.#attack;
      console.log(`${this.#name} ataca a ${target.#name}, reduciendo su vida a ${target.#life}`);
  }

  castSpell(target) {
      if (this.#mana < 3) {
          return -1;
      }
      target.#life -= this.#attack;
      this.#mana -= 3;
      console.log(`${this.#name} lanza un hechizo contra ${target.#name}, reduciendo su vida a ${target.#life}. Maná restante: ${this.#mana}`);
  }

  isAlive() {
      return this.#life > 0;
  }

  getStatus() {
      return `Mago: ${this.#name}, Nivel: ${this.#level}, Vida: ${this.#life}, Maná: ${this.#mana}`;
  }
}
