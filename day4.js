function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => {
      if (a.l < b.l && a.w < b.w && a.h < b.h) {
        return -1;
      }
    })
    .every((x, i) => {
      if (!boxes[i + 1]) return true;
      return boxes[i + 1].l > x.l && boxes[i + 1].w > x.w && boxes[i + 1].h > x.h;
    });
}

const boxes = [
  { l: 2, w: 2, h: 2 },
  { l: 2, w: 10, h: 2 },
  { l: 1, w: 1, h: 1 },
];

console.log(fitsInOneBox(boxes));
// let xD = fitsInOneBox(boxes);
// console.log(xD[0]);
// console.log(xD[1]);
// console.log(xD[2]);

// function fitsInOneBox(boxes) {
//   const boxSort = boxes.sort((a, b) => {
//     if (a.l < b.l && a.w < b.w && a.h < b.h) {
//       return -1;
//     }
//   });
//   for (let i = 0; i < boxSort.length; i++) {
//     if (i != 0) {
//       if (
//         boxSort[i - 1].l >= boxSort[i].l ||
//         boxSort[i - 1].w >= boxSort[i].w ||
//         boxSort[i - 1].h >= boxSort[i].h
//       ) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
