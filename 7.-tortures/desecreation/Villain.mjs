import Character from "./Character.mjs";

export default class Villain extends Character {
  constructor(name, intelligence, strength, speed, durability, power, combat, hitPoints) {
    super(name, intelligence, strength, speed, durability, power, combat)
    this.HP = hitPoints
  }

  attack(d, defensChar) {
    // ataque del hero
    console.log("ATAQUE DEL VILLANO")

    // roll de dado
    const oneD20 = d.D20.roll()

    // NORMAL
    if (oneD20 > 2 && oneD20 < 18) {
      console.log("*****ATAQUE NORMAL DEL VILLANO*****")

      defensChar.HP -= Math.ceil((this.POW + this.STR) * oneD20 / 100)

    // CRÍTICO
    } else if (oneD20 > 17) {
      console.log("*****ATAQUE CRÍTICO DEL VILLANO*****")

      defensChar.HP -= Math.ceil((this.POW + this.STR) * oneD20 / 100)
    }
  }
}