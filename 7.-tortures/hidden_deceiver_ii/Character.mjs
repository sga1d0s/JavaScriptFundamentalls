import getRandomIndex from "./index.mjs"
import die from './die.mjs'

export default class Character {
  constructor(name, occupation, gold, life, weapon, pouch = []) {
    this.name = name
    this.occupation = occupation
    this.gold = gold
    this.life = life
    this.weapon = weapon
    this.pouch = pouch
  }

  static createCharacter(characters, weapons) {
    let charactersArray = []

    for (let i = 0; i < characters.length; i++) {
      const character = characters[i];
      let randomWeapon = null

      switch (character.occupation) {
        case "thug":
          {
            const randomIndex = getRandomIndex(weapons.thugWeapons)
            randomWeapon = weapons.thugWeapons[randomIndex]
            weapons.thugWeapons.splice(randomIndex, 1)
          }
          break;

        case "priest":
          {
            const randomIndex = getRandomIndex(weapons.priestWeapons)
            randomWeapon = weapons.priestWeapons[randomIndex]
            weapons.priestWeapons.splice(randomIndex, 1)
          }
          break;

        case "peasant":
          {
            const randomIndex = getRandomIndex(weapons.peasantWeapons)
            randomWeapon = weapons.peasantWeapons[randomIndex]
            weapons.peasantWeapons.splice(randomIndex, 1)
          }
          break;

        default:
          break;
      }

      charactersArray.push(new Character(
        character.name,
        character.occupation,
        character.gold,
        character.life,
        randomWeapon,
        [],
      ))
    }

    // console.log(charactersArray)

    return charactersArray
  }

  buyStones(stones) {
    while (this.leftSomeMoney(stones)) {
      const randomIndex = getRandomIndex(stones)
      const stone = stones[randomIndex];
      if (this.gold >= stone.value) {
        this.pouch.push(stone)
        this.gold -= stone.value
      }
    }
  }

  leftSomeMoney(stones) {
    let cheapetsStone = stones[0].value

    for (let i = 0; i < stones.length; i++) {
      const stone = stones[i];
      if (stone.value < cheapetsStone) {
        cheapetsStone = stone.value
      }
    }

    return (this.gold >= cheapetsStone)
  }

  attack(enemy) {
    const n = this.weapon.numDieDamage

    // daño del arma
    let weaponDamage = this.rollTheDie(n) + 2

    // restamos 
    enemy.life -= weaponDamage
    this.weapon.quality -= 3

    return weaponDamage
  }

  rollTheDie(n) {
    let total = 0
    const d = die

    for (let i = 0; i < n; i++) {
      total += die[getRandomIndex(d)]
    }

    return total
  }

  clone() {
    const clonedWeapon = this.weapon.clone()
    const clonedPouch = []

    for (let i = 0; i < this.pouch.length; i++) {
      const stone = this.pouch[i].clone();
      clonedPouch.push(stone)
    }

    return new Character(
      this.name,
      this.occupation,
      this.gold,
      this.life,
      clonedWeapon,
      clonedPouch,
    )
  }

}