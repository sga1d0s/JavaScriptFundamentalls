import Effect from "./Effect.mjs";

export default class Ingredient {
  constructor(name, effects, value, weight) {
    this.name = name
    this.effects = effects
    this.value = value
    this.weight = weight
  }

  static from(data) {
    var name = data.name;
    var effects = data.effects;
    var value = data.value;
    var weight = data.weight;

    var mappedEffects = [];

    for (var i = 0; i < effects.length; i++) {
      mappedEffects.push(Effect.from(effects[i]));
    }

    return new Ingredient(name, mappedEffects, value, weight);
  }

  hasName(name) {
    return this.name === name;
  }

  hasEffect(effect) {
    for (var i = 0; i < this.effects.length; i++) {
        var candidate = this.effects[i];
        if (effect.name === candidate.name) {
            return true;
        }
    }
    return false;
}
  findCommonEffects(otherIngredient) {
    return this.effects.filter(effect => otherIngredient.hasEffect(effect));
  }
}