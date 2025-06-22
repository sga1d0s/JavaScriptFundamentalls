// TORTURE - DESECREATION
// https://docs.google.com/document/d/1QM1-t8nEX64DXXaBDhm6oSkgeHyBWi-gTaQk8DMZu0s/edit?tab=t.0

import Combat from "./Combat.mjs";
import Die from "./Die.mjs";
import TrainingGround from "./TrainingGround.mjs";

main();

async function main() {

  // ---- LEER DATOS DB
  const url = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
  const data = await getData(url)

  // ---- CREAR DADOS
  const diceMap = createDies();

  // ---- CREAR PERSONAJES
  const char = new TrainingGround(data)
  // heroe
  const heroChar = char.createSuperHero()
  // villano
  const villainChar = char.createVillain()

  // ---- CREAR Y EJECUTR COMBATE
  const combat = new Combat(heroChar, villainChar, diceMap)
  combat.execute()
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
