// TORTURE - THE APPARITION
// https://docs.google.com/document/d/1T7CjyFm6NML8nEyMHFXqZIwgdEkCX3PSVPxM-yGrouE/edit?tab=t.0

import characters from "./characters.mjs"
import scenarios from "./scenarios.mjs"

main()

function main() {

  // const names = createArrays(characters).names
  // const occupations = createArrays(characters).occupations
  // const strengths = createArrays(characters).strengths
  // const armors = createArrays(characters).armors
  // const speeds = createArrays(characters).speeds

  const { names, occupations, strengths, armors, speeds } = createArrays(characters)

  // calcular attacks 
  const attacks = []
  const attackHero = calculateAttack(characters[0])
  const attackVillain = calculateAttack(characters[1])
  attacks.push(attackHero, attackVillain)

  // crear escenario
  const levels = scenarios

  const randomLevel = createRandom(levels)

  // comienzo del juego
  console.log("Welcome to " + levels[randomLevel])
  console.log("-----------------------------")

  // muestra de personajes
  console.log("Let us introduce the fighters")
  console.log("-----------------------------")

  showCharacter(names, occupations, strengths, armors, speeds)

}

function createArrays(data) {
  // crear los 5 arrays

  const names = []
  const occupations = []
  const strengths = []
  const armors = []
  const speeds = []

  for (let i = 0; i < data.length; i++) {
    const name = data[i].name;
    names.push(name)

    const occupation = data[i].occupation
    occupations.push(occupation)

    const strength = data[i].strength
    strengths.push(strength)

    const armor = data[i].armor
    armors.push(armor)

    const speed = data[i].speed
    speeds.push(speed)

  }

  return { names, occupations, strengths, armors, speeds }
}

function calculateAttack(data) {
  let attack = Math.min((data.strength - data.armor + data.speed * 2) * 5, 100)

  if (attack < 10) {
    attack = 10
  }

  return attack
}

function createRandom(data) {
  const randomIndex = Math.floor(Math.random() * data.length);

  return randomIndex
}

function showCharacter(names, occupations, strengths, armors, speeds) {
  for (let i = 0; i < 2; i++) {
    console.log(names[i] + " the " + occupations[i])
    console.log("Strength: " + strengths[i])
    console.log("Armor: " + armors[i])
    console.log("Speed: " + speeds[i])
    console.log("-----------------")

  }
}