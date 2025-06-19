import Ingredient from "./Ingredient.mjs";

export default class Ingredients {
  constructor(ingredients) {
    this.ingredients = ingredients
  }

  static load(data) {
    var ingredientList = [];

    for (var i = 0; i < data.ingredients.length; i++) {
      ingredientList.push(Ingredient.from(data.ingredients[i]));
    }

    return new Ingredients(ingredientList);
  }

  find(name) {
    var ingredient = null;

    for (var i = 0; i < this.ingredients.length; i++) {
      var element = this.ingredients[i];
      if (element.hasName(name)) {
        ingredient = element;
        break;
      }
    }

    if (ingredient === null) {
      throw new Error("Unknown ingredient " + name);
    }

    return ingredient;
  }
}