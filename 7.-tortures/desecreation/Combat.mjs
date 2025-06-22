
export default class Combat {
  constructor(hero, villain, dice) {
    this.hero = hero
    this.villain = villain
    this.dice = dice
  }

  execute() {
    let round = 1

    let attackChar = null
    let defensChar = null

    // comienza mayor INT + COM
    if (this.hero.INT + this.hero.COM > this.villain.INT + this.villain.COM) {
      attackChar = this.hero
      defensChar = this.villain
    } else {
      attackChar = this.villain
      defensChar = this.hero
    }

    // ATAQUE
    while (!this.isGameOver()) {

      const d = this.dice

      console.log(`Ronda n: ${round}`)

      console.log(`Attacker is: ${attackChar.name}`)
      console.log(`Defensor is: ${defensChar.name}`)
      console.log("")

      // fase 1 exito o fracaso en el ataque
      const oneD100 = d.D100.roll()

      if (oneD100 <= attackChar.COM) {
        console.log("Attack success")

        // fase 2 daño de ataque
        attackChar.attack(this.dice, defensChar)

      } else {
        console.log("Attack **FAIL** shift change");

        ({ attackChar, defensChar } = this.changeTurn(attackChar, defensChar));
        /* [attackChar, defensChar] = [defensChar, attackChar] */
      }

      round++

      console.log(this.hero)
      console.log(this.villain)
      console.log("")
    }
  }

  changeTurn(attack, defense) {
    return { "attackChar": defense, "defensChar": attack }
  }

  isGameOver() {
    if (this.hero.HP <= 0) {
      console.log("GANA EL VILLANO ESTA PARTIDA")
      return true
    }

    if (this.villain.HP <= 0){
      console.log("GANA EL HEROE ESTA PARTIDA")
      return true
    }
    return false
  }
}