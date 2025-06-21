import Character from "./Character.mjs";

export default class Villain extends Character {
  constructor(name, intelligence, strength, speed, durability, power, combat, hitPoints) {
    super(name, intelligence, strength, speed, durability, power, combat)
    this.HP = hitPoints
  }

  attack() { 
    //
  }

}