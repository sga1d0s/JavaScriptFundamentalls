
export default class Character {
  constructor(name, level, age, stamina, inventory) {
    this.name = name
    this.level = level
    this.age = age
    this.stamina = stamina
    this.inventory = inventory
  }

  findInventory(weapons) {

    let weaponEquiped = ""

    for (let i = 0; i < this.inventory.length; i++) {
      const element = this.inventory[i];
      if (element.constructor.name === "Weapon") {
        weaponEquiped = element.name
      }
    }

    for (let i = 0; i < weapons.length; i++) {
      const weapon = weapons[i];

      if (weapon.minLevel <= this.level && weapon.name != weaponEquiped) {
        this.inventory.push(weapon)
      }
    }

    console.log(`Character name: ${this.name}, Level: ${this.level}`)
    console.log("--------------------")

    for (let i = 0; i < this.inventory.length; i++) {
      const element = this.inventory[i];
      if (element.constructor.name == "Weapon") {
        console.log(`Name: ${element.name}, Level: ${element.minLevel}`)
      }
    }
    console.log("")
  }

  fumble() {
    // seleccionar un arma de entre todas las disponibles para el personaje(random)
    const weapons = []

    for (let i = 0; i < this.inventory.length; i++) {
      const element = this.inventory[i];
      if (element.constructor.name === "Weapon") {
        weapons.push(element)
      }
    }

    const randomIndex = Math.floor(Math.random() * weapons.length)
    const weapon = weapons[randomIndex]
    console.log(`Weapon selected ir ${weapon.name}`)

    // calcular el daño que hace el arma
    const totalDamage = Math.ceil(weapon.damage + this.level / 4)

    // restar el daño total de la defensa de la armadura
    for (let i = 0; i < this.inventory.length; i++) {
      const element = this.inventory[i];
      if (element.constructor.name === "Armor") {
        element.defense -= totalDamage
      }
    }

    // restamos 5 puntos de stamina del personaje
    this.stamina -= 5

    // restamos 2 puntos de durabilidad del arma
    weapon.durability -= 2
  }
}