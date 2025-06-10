import TrainingGround from "./Characters/TrainingGround.mjs";
import Die from "./Die.mjs";
import Combat from "./Combat.mjs";

CreateGame();


async function CreateGame() {
  const url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const datos = await response.json();

    const Characters = TrainingGround.createCharacters(datos);
    const dies = createDies();
    const combat = new Combat(Characters.hero, Characters.villain, dies);
    combat.execute();

  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
}

function createDies() {
    let dies = [];

    dies.push(Die.createDie("D3"));
    dies.push(Die.createDie("D5"));
    dies.push(Die.createDie("D20"));
    dies.push(Die.createDie("D100"));

    return dies;
}
