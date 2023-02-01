function sortToys(toys, positions) {
  return toys
    .map((x, i) => {
      return { toy: x, value: positions[i] };
    })
    .sort((a, b) => a.value - b.value)
    .map((x) => x.toy);
}
const toys = ["ball", "doll", "car", "puzzle"];
const positions = [2, 3, 1, 0];

console.log(sortToys(toys, positions));
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ["pc", "xbox", "ps4", "switch", "nintendo"];
const morePositions = [8, 6, 5, 7, 9];

console.log(sortToys(moreToys, morePositions));
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
