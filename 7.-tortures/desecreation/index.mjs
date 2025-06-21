// TORTURE - DESECREATION
// https://docs.google.com/document/d/1QM1-t8nEX64DXXaBDhm6oSkgeHyBWi-gTaQk8DMZu0s/edit?tab=t.0

import Die from "./Die.mjs";
import TrainingGround from "./TrainingGround.mjs";

main();

async function main() {

  // leer datos de DB
  const url = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
  const data = await getData(url)

  // crear los dados dentro de diceMap
  const diceMap = createDies();

  const char = new TrainingGround(data)

  // crear heroes
  const heroChar = char.createSuperHero()

  // crear villano
  const villainChar = char.createVillain()  

  // crear combate

}

function createDies() {
  const diceMap = {};

  diceMap.D3 = Die.createD3();
  diceMap.D5 = Die.createD5();
  diceMap.D20 = Die.createD20();
  diceMap.D100 = Die.createD100();

  return diceMap;
}

async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();

    return json

  } catch (error) {
    console.error(error.message);
  }
}
