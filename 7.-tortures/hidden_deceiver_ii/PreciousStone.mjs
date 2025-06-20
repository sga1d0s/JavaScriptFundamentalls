
export default class PreciousStone {
  constructor(name, description, value) {
    this.name = name
    this.description = description
    this.value = value
  }

  static createStone(stones){
    let stonesArray = []

    for (let i = 0; i < stones.length; i++) {
      const stone = stones[i];
      
      stonesArray.push(new PreciousStone(
        stone.name, 
        stone.description,
        stone.value
      ))
      
    }

    // console.log(stonesArray)

    return stonesArray
  }
}