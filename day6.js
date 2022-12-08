// function createCube(size) {
//   const shapes = {
//     up_left: "/\\",
//     down_left: "\\/",
//     up_rigth: "_\\",
//     down_rigth: "_/",
//     jump_line: "\n",
//     space: " ",
//   };
//   let string = "";

//   for (let i = 0; i < size; i++) {
//     string +=
//       shapes.space.repeat(size - (i + 1)) +
//       shapes.up_left.repeat(i + 1) +
//       shapes.up_rigth.repeat(size) +
//       shapes.jump_line;
//   }

//   for (let i = size; i > 0; i--) {
//     string +=
//       shapes.space.repeat(size - i) +
//       shapes.down_left.repeat(i) +
//       shapes.down_rigth.repeat(size) +
//       (size - i == size - 1 ? "" : shapes.jump_line);
//   }
//   return string;
// }

function createCube(size) {
  const lines = (index, act) => {
    return (
      " ".repeat(size - (index + 1)) +
      "/\\".repeat(index + 1) +
      act.repeat(size) +
      "\n"
    );
  };

  let arrayBaseUpSide = "_\\-".repeat(size).split("-");
  arrayBaseUpSide.splice(arrayBaseUpSide.length - 1);

  return (
    arrayBaseUpSide.map((x, index) => lines(index, x)).join("") +
    arrayBaseUpSide
      .map((x, index) => lines(index, x))
      .reverse()
      .join("")
      .slice(0, -1)
      .replaceAll("_\\", "_/")
      .replaceAll("/\\", "\\/")
  );
}
console.log(createCube(5));

// function createCube(size) {
//   const lines = (index, act) => {
//     return (
//       " ".repeat(size - (index + 1)) +
//       xD2.repeat(index + 1) +
//       act.repeat(size) +
//       xD3
//     );
//   };
//   let xD2 = "/\\";
//   let xD3 = "\n";

//   let xD = "_\\-".repeat(size).split("-");
//   xD.splice(xD.length - 1);
//   let newarray = xD.map((x, index) => lines(index, x));
//   let string = newarray.join("");
//   let newarray2 = newarray.reverse();
//   let string2 = newarray2.join("");
//   string2 = string2.substring(0, string2.length - 1);
//   return string + string2.replaceAll("_\\", "_/").replaceAll("/\\", "\\/");
// }
