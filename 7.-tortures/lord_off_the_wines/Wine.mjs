import wines from "./wines.mjs"

export default class Wine {
  constructor(name, points, poisonTime, effectTime) {
    this.name = name
    this.points = points
    this.poisonTime = poisonTime
    this.effectTime = effectTime

    this.isOnPoisonState = false
  }

  isPoison(dayMoment) {
    // indica si el vino está en estado venenoso
    if (this.name === "Opprobrium" && dayMoment === this.poisonTime) {
      this.isOnPoisonState = true
    }
    if (this.name === "Adventus" && dayMoment === this.poisonTime) {
      this.isOnPoisonState = true
    }
    if (this.name === "Chrysalis" && dayMoment === this.poisonTime) {
      this.isOnPoisonState = true
    }
    if (this.name === "Red Wine" && dayMoment === this.poisonTime) {
      this.isOnPoisonState = true
    }

    return this.isOnPoisonState
  }

  static main() {
    // mostrar los vinos en pantalla

    console.log("Wine list")
    console.log("-----------------")

    for (let i = 0; i < wines.length; i++) {
      const wine = wines[i];
      console.log(`Name: ${wine.name}`)
      console.log(`Points: ${wine.points}`)
      console.log(`Poison Time: ${wine.poisonTime}`)
      console.log(`Effect Time: ${wine.effecTime}`)

      console.log("-----------------\n")
    }
  }
}