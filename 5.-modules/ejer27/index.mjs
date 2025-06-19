import { getIngredients, getPlayer } from "./data.mjs"

async function main() {
  try {
    // get player and data info

    const ingredientsData = await getIngredients()
    const playerData = await getPlayer()

    // load ingredients static method of ingredients
    // new cauldron object

    // print pouch with the corresponding color
    // create potionBag static method create

    // showPotions(potionbag.potions)

    // create character
    // show character

    // character drink the potion

  } catch (error) {
    console.log("Error: ", error.message)
  }
}

/* function showPotions(potions){
  // print potions
}

function showCharacter(character){
  // print character
} */

main()