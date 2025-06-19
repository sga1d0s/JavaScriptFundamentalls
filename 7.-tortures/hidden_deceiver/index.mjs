
import data from './characters.mjs'
import Character from './Character.mjs'
import Weapon from './Weapon.mjs'
import Armor from './Armor.mjs'

main()

function main() {

  const characters = []
  const weapons = []
  const armors = []

  // crear todos los objetos e introducirlos en arrays
  console.log(data)

  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const inventory = []

    const weapon = new Weapon(d.weapon.name, d.weapon.minLevel, d.weapon.damage, d.weapon.durability)
    weapons.push(weapon)
    inventory.push(weapon)

    const armor = new Armor(d.armor.name, d.armor.minLevel, d.armor.defense)
    armors.push(armor)
    inventory.push(armor)

    let character = new Character(d.name, d.level, d.age, d.stamina, inventory)
    characters.push(character)

  }

  // mostrar listado de todas las armas y armaduras
  console.log(characters)
  console.log(weapons)
  console.log(armors)


  // mostrar todos los persojnajes con sus atributos y equipamiento

  // seleccionar armaduras con nivel menor de 30 mostrar nombre y nivel

  // buscar para cada personaje todas las armas que pueden utilizar segun nivel
  // y añadirlas a su equipamiento. Mostrar nombre y nivel de cada personaje junto a
  //nombre y nivel de cada arma que lleve

  // ejecutar método fumble para un personaje y mostrar sus datos actualizados

}

function createObjects(){
  
}