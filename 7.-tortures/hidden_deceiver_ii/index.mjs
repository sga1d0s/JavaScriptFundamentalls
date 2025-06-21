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

  // mostrar personajes y atributos
  printCharacters(characters)

  // empieza el combate
  combat(characters)


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

function printCharacters(characters) {
  console.log("CHARACTER LIST")
  console.log("--------------\n")

  for (let i = 0; i < characters.length; i++) {
    const c = characters[i];

    console.log(c.name)
    console.log("--------------")
    console.log(`Occupation: ${c.occupation}`)
    console.log(`Gold: ${c.gold}`)
    console.log("--------------")
    console.log("Weapon")
    console.log("--------------")
    console.log(`Name: ${c.weapon.name}`)
    console.log(`Description: ${c.weapon.description}`)
    console.log(`Num dice of damage: ${c.weapon.num_die_damage}`)
    console.log(`Type: ${c.weapon.type}`)
    console.log(`Quality: ${c.weapon.quality}`)
    console.log("--------------")
    console.log("Pouch")
    console.log("--------------")
    for (let j = 0; j < c.pouch.length; j++) {
      const s = c.pouch[j];
      console.log(`${s.name}: ${s.value} coins`)
    }
    console.log("\n")
    console.log("\n")
  }
}

function combat(characters) {

  let randomIndexPlayer1 = getRandomIndex(characters)
  let randomIndexPlayer2 = randomIndexPlayer1

  do {
    randomIndexPlayer2 = getRandomIndex(characters)
  } while (randomIndexPlayer1 === randomIndexPlayer2);

  const attacker = characters[randomIndexPlayer1].clone()
  const enemy = characters[randomIndexPlayer2].clone()

  printCharacterInfo(attacker)
  printCharacterInfo(enemy)

  // Attack
  const damage = attacker.attack(enemy)

  console.log("")
  console.log("ATTACK with " + damage)
  console.log("")

  printCharacterInfo(attacker)
  printCharacterInfo(enemy)

  return { attacker, enemy, damage }
}

function printCharacterInfo(character) {

  return (
    console.log(`Name: ${character.name}. Life: ${character.life}`),
    console.log(`Weapon: ${character.weapon.name}. Damage: ${character.weapon.numDieDamage}. Quality: ${character.weapon.quality}`)
  )
}

export default function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}