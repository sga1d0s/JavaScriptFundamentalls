// TORTURE - LORD OF THE WINES
// https://docs.google.com/document/d/1csOFpZmeu0CuABJw17ByeZT8gJbMMnEjHjTwRUhICm0/edit?tab=t.0#heading=h.y3u6xwsvd4b

import Die from "./Die.mjs"
import Time from "./Time.mjs"
import Wine from "./Wine.mjs"
import wines from "./wines.mjs"
import Heretic from "./Heretic.mjs"

main()

function main() {

  // crear le dado
  // let hieraticDie = new Die("Hieratic")
  let gracefulDie = new Die("Graceful")
  

  let die = gracefulDie.createDice()
  // gracefulDie.main()

  // test Time
  const dayMoment = new Time(35, 12, 2)
  const time = new Date()

  dayMoment.main()

  console.log(dayMoment.getTimeDay())

  // test Wine
  const data = randomWine(wines)

  Wine.main()

  let wineTest = new Wine(data)

  let info = wineTest.isPoison(dayMoment.getTimeDay())

  console.log(info)

  // test Heretic
  let heretic = Heretic.createHeretic(
    "Ignatius",
    14,
    die,
    wines,
    time
  )

  console.log(heretic)

}

function randomWine(wineData) {

  const randomIndex = Math.floor(Math.random() * wineData.length)
  const wine = wineData[randomIndex]

  const name = wine.name
  const points = wine.points
  const poisonTime = wine.poisonTime
  const effecTime = wine.effecTime

  return { name, points, poisonTime, effecTime }
}