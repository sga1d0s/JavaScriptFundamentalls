import weaponsData from './data/weapons.mjs'
import preciousStonesData from './data/preciousStones.mjs'
import charactersData from './data/characters.mjs'

import PreciousStone from './PreciousStone.mjs'
import Weapon from './Weapon.mjs'
import Character from './Character.mjs'

main()

async function main() {

  // crear array con objetos PreciousStone
  const preciousStones = PreciousStone.createStone(preciousStonesData)

  // crear array con objetos Weapon
  const weapons = Weapon.createWeapon(weaponsData)

  // creamos array de objetos de las armas elegidas
  const weaponsByOccupation = selectWeapon(weapons)

  // crear array con objetos Character
  const characters = Character.createCharacter(charactersData, weaponsByOccupation, preciousStones)

  // añadir las piedras preciosas compradas
  addPreciousStones(characters, preciousStones)


}

function selectWeapon(weapons) {
  const thugWeapons = []
  const priestWeapons = []
  const peasantWeapons = []

  for (let i = 0; i < weapons.length; i++) {
    const weapon = weapons[i]

    if (weapon.name.includes("Bow") || weapon.name.includes("Longbow")) {
      thugWeapons.push(weapon)
    }

    if (weapon.type === "arcane") {
      priestWeapons.push(weapon)
    }

    if (weapon.name.includes("Wand") && weapon.type === "common") {
      peasantWeapons.push(weapon)
    }
  }
  return { thugWeapons, priestWeapons, peasantWeapons }
}

function addPreciousStones(characters, preciousStones) {
  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];
    character.buyStones(preciousStones)
  }
}

export default function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}