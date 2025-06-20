
export default class Character {
  constructor(name, occupation, gold, life, weapon, pouch) {
    this.name = name
    this.occupation = occupation
    this.gold = gold
    this.life = life
    this.weapon = weapon
    this.pouch = pouch
  }

  static createCharacter(characters, weapons, preciousStones) {
    let charactersArray = []

    for (let i = 0; i < characters.length; i++) {
      const character = characters[i];
      let randomWeapon = null

      switch (character.occupation) {
        case "thug":
          {
            const randomIndex = this.randomIndex(weapons.thugWeapons)
            randomWeapon = weapons.thugWeapons[randomIndex]
            weapons.thugWeapons.splice(randomIndex, 1)
          }
          break;

        case "priest":
          {
            const randomIndex = this.randomIndex(weapons.priestWeapons)
            randomWeapon = weapons.priestWeapons[randomIndex]
            weapons.priestWeapons.splice(randomIndex, 1)
          }
          break;

        case "peasant":
          {
            const randomIndex = this.randomIndex(weapons.peasantWeapons)
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
        character.pouch,
      ))
    }
    return charactersArray
  }

  static randomIndex(array) {
    return Math.floor(Math.random() * array.length)
  }

}