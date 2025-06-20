// TORTURE - HIDDEN DECEIVER
// https://docs.google.com/document/d/1TVxyuvq-dsa-ls8-U6Qc2H4ykrhnuK79n_iz6-jtmBY/edit?tab=t.0

import data from './characters.mjs'
import Character from './Character.mjs'
import Weapon from './Weapon.mjs'
import Armor from './Armor.mjs'

import globals from './globals.mjs'

main()

function main() {

  // crear todos los objetos e introducirlos en arrays
  createObjects()


  // mostrar listado de todas las armas y armaduras
  printData(globals.weapons)
  printData(globals.armors)

  // mostrar todos los persojnajes con sus atributos y equipamiento
  printData(globals.characters)

  // seleccionar armaduras con nivel menor de 30 mostrar nombre y nivel
  selectArmors(globals.armors)

  // buscar para cada personaje todas las armas que pueden utilizar segun nivel
  // y añadirlas a su equipamiento. Mostrar nombre y nivel de cada personaje junto a
  // nombre y nivel de cada arma que lleve
  findWeapons(globals.characters)

  // ejecutar método fumble para un personaje y mostrar sus datos actualizados
  console.log(globals.characters[0].inventory)
  console.log("")
  globals.characters[0].fumble()
  console.log("")
  console.log(globals.characters[0].inventory)

}

function createObjects() {
  // crear objetos desde data y meterlos en arrays
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const inventory = []

    const weapon = new Weapon(d.weapon.name, d.weapon.minLevel, d.weapon.damage, d.weapon.durability)
    globals.weapons.push(weapon)
    inventory.push(weapon)

    const armor = new Armor(d.armor.name, d.armor.minLevel, d.armor.defense)
    globals.armors.push(armor)
    inventory.push(armor)

    let character = new Character(d.name, d.level, d.age, d.stamina, inventory)
    globals.characters.push(character)
  }
}

function printData(data) {
  const dataName = data[0].constructor.name

  switch (dataName) {
    case "Weapon":
      console.log("Weapon list")
      console.log("-----------")

      // mostrar información de data
      for (let i = 0; i < data.length; i++) {
        const d = data[i];
        console.log(
          `${d.name}: Min Level = ${d.minLevel}, Damage = ${d.damage}, Durability = ${d.durability}`
        )
      }
      console.log("")
      break;

    case "Armor":
      console.log("Armor list")
      console.log("----------")

      // mostrar información de data
      for (let i = 0; i < data.length; i++) {
        const d = data[i];
        console.log(
          `${d.name}: Min Level = ${d.minLevel}, Defense = ${d.defense}`
        )
      }
      console.log("")
      break;

    case "Character":
      console.log("CHARACTER LIST")
      console.log("--------------")

      // mostrar información de data
      for (let i = 0; i < data.length; i++) {
        const d = data[i];
        console.log("*" + d.name)
        console.log("-----------")
        console.log("Attributes:")
        console.log("-----------")
        console.log(`Level: ${d.level}`)
        console.log(`Age: ${d.age}`)
        console.log(`Stamina: ${d.stamina}`)
        console.log("-----------")


        for (let j = 0; j < d.inventory.length; j++) {
          const i = d.inventory[j];

          if (i.constructor.name === "Weapon") {
            console.log("Weapons:")
            console.log("-----------")
            console.log(`Name: ${i.name}`)
            console.log(`Min Level: ${i.minLevel}`)
            console.log(`Damage: ${i.damage}`)
            console.log(`Durability: ${i.durability}`)
            console.log("-----------")

          }

          if (i.constructor.name === "Armor") {
            console.log("Armors:")
            console.log("-----------")
            console.log(`Name: ${i.name}`)
            console.log(`Min Level: ${i.minLevel}`)
            console.log(`Defense: ${i.defense}`)
            console.log("-----------")
            console.log("")
          }
        }
      }
      console.log("")
      break;

    default:
      break;
  }



}

function selectArmors(data) {
  console.log("Selected Armors")
  console.log("---------------")
  for (let i = 0; i < data.length; i++) {
    const d = data[i];

    if (d.minLevel < 30) {
      console.log(`Name: ${d.name}, Level: ${d.minLevel}`)
    }
  }
  console.log("")
}

function findWeapons(data) {
  for (let i = 0; i < data.length; i++) {
    const character = data[i];
    character.findInventory(globals.weapons)
  }
}

