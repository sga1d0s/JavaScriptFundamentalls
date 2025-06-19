
export default class Heretic {
  constructor(name, age, dice, bottles, goldenWatch){
    this.name = name
    this.age = age
    this.dice = dice
    this.bottles = bottles
    this.goldenWatch = goldenWatch;

    this.level = this.age + (this.age /3)
    this.stamina = 12 * this.level

    if (this.age < 16) {
      this.age = 16
    }
  }

  static createHeretic(name, age, dice, bottles, goldenWatch){

    const heretic = new Heretic(
      name,
      age,
      dice,
      bottles,
      goldenWatch
    )

    return heretic
  }

}