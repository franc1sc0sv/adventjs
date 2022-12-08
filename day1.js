const gifts = [];
const wrapped = wrapping(gifts);
console.log(wrapped);
wrapped.map((x) => console.log(x));

function wrapping(gifts) {
  return gifts.map((x) => {
    return `${"*".repeat(x.length + 2)}\n*${x}*\n${"*".repeat(x.length + 2)}` ;
  });
}
