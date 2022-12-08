const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

const calculate = (array,amount)=>{return array.map((x) => {return x.length * amount}).reduce((a, b) => a + b, 0);}

function distributeGifts(packOfGifts, reindeers) {
  return  Math.trunc(calculate(reindeers, 2) / calculate(packOfGifts, 1));
}

console.log(distributeGifts(packOfGifts, reindeers))