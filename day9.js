///Esta tiene una representacion grafica la tocha
// function countTime(leds) {
//   const checkOnLeds = (arr) => arr.every((item) => item == 1);
//   const changeStatusLeds = (arr, OnLeds) => {
//     return arr.map((acc, index, arr) => {
//       if (acc == 1) return 1;
//       return index == 0 ? include(arr.length, OnLeds) : include(index, OnLeds);
//     });
//   };
//   const include = (index, arr) => (arr.includes(index) ? 1 : 0);

//   const onLedsIndex = (arr) =>
//     arr.map((acc, index) => (acc == 1 ? index + 1 : 0));

//   const OnLeds = (arr, times = 0) => {
//     if (checkOnLeds(arr)) return times * 7;
//     return OnLeds(changeStatusLeds(arr, onLedsIndex(arr)), times + 1);
//   };
//   return OnLeds(leds, 0);
// }

//la de contar solo los ceros
function countTime(leds) {
  const ofLeds = leds.join("").split("1");
  ofLeds[0] += ofLeds.pop();

  return Math.max(...ofLeds.map((led) => led.length)) * 7

}

const leds = [0, 0, 1, 0, 0];
console.log(countTime(leds));

const xD = [1, 2, 3];

console.log(xD.map((x) => x + 1));
