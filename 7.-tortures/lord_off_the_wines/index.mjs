// TORTURE - LORD OF THE WINES
// https://docs.google.com/document/d/1csOFpZmeu0CuABJw17ByeZT8gJbMMnEjHjTwRUhICm0/edit?tab=t.0#heading=h.y3u6xwsvd4b

import Die from "./Die.mjs"
import Time from "./Time.mjs"
import Wine from "./Wine.mjs"
import wines from "./wines.mjs"

main()

function main() {

  // crear le dado
  let hieraticDie = new Die("Hieretic")
  let gracefulDie = new Die("Graceful")

  // hieraticDie.main()
  // gracefulDie.main()

  // test Time
  const dayMoment = new Time(35, 12, 2)

  dayMoment.main()

  console.log(dayMoment.getTimeDay())

  // test Wine
  Wine.main()

  let wineTest = new Wine(
    wines[1].name,
    wines[1].points,
    wines[1].poisonTime,
    wines[1].effecTime,
  )

  let info = wineTest.isPoison(dayMoment.getTimeDay())

  console.log(info)

}