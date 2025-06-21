
export default class Weapon {
  constructor(name, description, numDieDamage, type, quality) {
    this.name = name
    this.description = description
    this.numDieDamage = numDieDamage
    this.type = type
    this.quality = quality
  }

  static createWeapon(weapons) {
    let weaponsArray = []

    for (let i = 0; i < weapons.length; i++) {
      const weapon = weapons[i];

      weaponsArray.push(new Weapon(
        weapon.name,
        weapon.description,
        weapon.num_die_damage,
        weapon.type,
        weapon.quality
      ))

    }

    return weaponsArray
  }

  clone() {
    return new Weapon(
      this.name,
      this.description,
      this.numDieDamage,
      this.type,
      this.quality,
    )
  }
}