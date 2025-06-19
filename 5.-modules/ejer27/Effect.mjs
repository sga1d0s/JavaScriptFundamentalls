import positive_effect_tokens from "./constants.mjs"

export default class Effect {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  static from(name) {
    let type;
    let found = false;

    for (var i = 0; i < positive_effect_tokens.length; i++) {
      if (name.includes(positive_effect_tokens[i])) {
        found = true;
        break;
      }
    }

    if (found) {
      type = 'beneficial';
    } else {
      type = 'harmful';
    } 
    
    return new Effect(name, type);
  }
}