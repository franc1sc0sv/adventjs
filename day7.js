const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

function getGiftsToRefill(a1, a2, a3) {
  const set = (...params) => Array.from(new Set(params.flat()));
  return set(a1, a2, a3).filter((actValue) => {
    return a1.includes(actValue) +
      a2.includes(actValue) +
      a3.includes(actValue) >=
      2
      ? false
      : true;
  });
}

// function getGiftsToRefill(a1, a2, a3) {
//     return [...new Set(a1.concat(a2, a3))].filter((actValue) => {
//       return a1.includes(actValue) + a2.includes(actValue) + a3.includes(actValue) >= 2 ? false: true;
//     });
//   }

///CODIGO PARA ELIMINAR DUPLICADOS EN UN ARRAY
// function getGiftsToRefill(a1, a2, a3) {
//   let arr2 = [];
//   const validate = (actValue, index, arr) => {
//     if (!arr[index + 1]) return true;
//     return actValue == arr[index + 1] ? validate2(actValue) : true;
//   };
//   const validate2 = (actValue) => {
//     arr2.push(actValue);
//     return false;
//   };
//   const sets = (arr) => {
//     return [...new Set(arr)];
//   };
//   a1 = sets(a1);
//   a2 = sets(a2);
//   a3 = sets(a3);
//     return a1.concat(a2, a3).sort()
// //     .filter((actValue, index, arr) => {
// //       return arr2.includes(actValue) ? false : validate(actValue, index, arr);
// //     });
// }

const gifts = getGiftsToRefill(a1, a2, a3);
console.log(gifts);
