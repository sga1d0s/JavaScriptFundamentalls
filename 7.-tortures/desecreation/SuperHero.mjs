import Character from "./Character.mjs";

export default class SuperHero extends Character {
  constructor(name, intelligence, strength, speed, durability, power, combat, hitPoints) {
    super(name, intelligence, strength, speed, durability, power, combat)
    this.HP = hitPoints
  }

  attack(d, defensChar) {
    // ataque del hero
    console.log("ATAQUE DEL HEROE")

    // roll de dado
    const oneD20 = d.D20.roll()

    // PIFIA
    if (oneD20 === 1) {
      console.log("*****PIFIA TOTAL*****")

      let damage = Math.floor(this.SPE / d.D3.roll())
      this.HP -= damage
      console.log(`${this.name} se hace ${damage} de daño`)

    } else if (oneD20 === 2) {
      console.log("*****PIFIA TOTAL*****")

      let damage = Math.floor(this.SPE / (4 * d.D3.roll()))
      this.HP -= damage
      console.log(`${this.name} se hace ${damage} de daño`)

      // NORMAL
    } else if (oneD20 > 2 && oneD20 < 18) {
      console.log("*****ATAQUE NORMAL DEL HEROE*****")

      defensChar.HP -= Math.ceil((this.POW + this.STR) * oneD20 / 100)

      // CRÍTICO
    } else if (oneD20 > 17) {
      console.log("*****ATAQUE CRÍTICO DEL HEROE*****")
      defensChar.HP -= Math.ceil((this.POW + this.STR) * oneD20 / 100)
    }
  }
}