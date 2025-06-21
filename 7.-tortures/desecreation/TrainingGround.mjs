import SuperHero from "./SuperHero.mjs"
import Villain from "./Villain.mjs"

export default class TrainingGround {
  constructor(data) {
    this.data = data

    const { heros = [], villain = [] } = this.extractHerosAndVillain()
    this.heros = heros
    this.villain = villain
  }

  createSuperHero() {
    const index = Math.floor(Math.random() * this.heros.length)
    const h = this.heros[index]

    // crear al heroe
    return new SuperHero(
      h.name,
      h.powerstats.intelligence,
      h.powerstats.strength,
      h.powerstats.speed,
      h.powerstats.durability,
      h.powerstats.power,
      h.powerstats.combat,
      Math.min(h.powerstats.strength * 10, 666)
    )
  }

  createVillain() {
    const v = this.villain[0]

    // crea el villano
    return new Villain(
      v.name,
      v.powerstats.intelligence,
      v.powerstats.strength,
      v.powerstats.speed,
      v.powerstats.durability,
      v.powerstats.power,
      v.powerstats.combat,
      Math.min(v.powerstats.strength * 10, 666)
    )
  }

  extractHerosAndVillain() {
    // dividir el array en el villano y el resto

    const heros = []
    const villain = []

    for (let i = 0; i < this.data.length; i++) {
      const d = this.data[i];

      if (d.name != "Junkpile") {
        heros.push(d)
      } else {
        villain.push(d)
      }
    }
    return { heros, villain }
  }
}