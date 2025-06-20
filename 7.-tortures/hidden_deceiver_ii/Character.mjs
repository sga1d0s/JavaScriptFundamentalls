import getRandomIndex from "./index.mjs"

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

    console.log(charactersArray)

    return charactersArray
  }

  buyStones(stones) {
    do {
      const randomIndex = getRandomIndex(stones)
      const stone = stones[randomIndex];
      this.pouch.push(stone)
      this.gold -= stone.value
    } while (this.leftSomeMoney(stones));
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
}