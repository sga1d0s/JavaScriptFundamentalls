
export default class Weapon {
  constructor(name, description, numDieManage, type, quality) {
    this.name = name
    this.description = description
    this.numDieManage = numDieManage
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

    // console.log(weaponsArray)

    return weaponsArray
  }

  selectWeapon() {

  }
}