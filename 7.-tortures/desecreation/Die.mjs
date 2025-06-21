
export default class Die {
  constructor(values) {
    this.values = values;
  }

  static createD3() {
    return new Die([1, 2, 3]);
  }

  static createD5() {
    return new Die([1, 2, 3, 4, 5]);
  }

  static createD20() {
    const values = [];
    for (let i = 1; i <= 20; i++) {
      values.push(i);
    }
    return new Die(values);
  }

  static createD100() {
    const values = [];
    for (let i = 1; i <= 100; i++) {
      values.push(i);
    }
    return new Die(values);
  }

  roll() {
    const index = Math.floor(Math.random() * this.values.length);
    return this.values[index];
  }

}