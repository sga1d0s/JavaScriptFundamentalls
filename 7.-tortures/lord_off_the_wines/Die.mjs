
export default class Die {
  constructor(name) {
    // prarámetro
    this.name = name
    this.values = []
  }

  roll() {
    // tirada de dados
    const randomIndex = Math.floor(Math.random() * this.values.length)

    return this.values[randomIndex]
  }

  createDice() {
    // función principal
    let value = 0
    // selección de dado
    if (this.name === "Graceful") {
      this.values = [1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 8]; // atributo
    } else if (this.name === "Hieratic") {
      this.values = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5]; // atributo
    } else {
      this.values = [1, 2, 3, 4, 5, 6]; // dado por defecto
    }

    console.log("Dado " + this.name)
    console.log("------------------")

    for (let i = 0; i < 20; i++) {
      let value = this.roll()
      console.log(value)
    }

    console.log("------------------")

    return value
  }
}