function dryNumber(dry, numbers) {
  return [...Array(numbers).keys()]
    .filter((x) => `${x + 1}`.split("").includes(`${dry}`))
    .map((x) => x + 1);
}

function dryNumber(dry, numbers) {
  return Array.from({ length: numbers }, (x, i) => i + 1).filter((x) =>
    String(x).split("").includes(String(dry))
  );
}

console.log(Array(20).keys());
console.log(dryNumber(2, 5));
