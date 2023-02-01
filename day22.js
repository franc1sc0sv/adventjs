const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"];
const stepNumbers = [1, 33, 10, 2, 44, 20];

console.log(checkStepNumbers(systemNames, stepNumbers));

function checkStepNumbers(systemNames, stepNumbers) {
  return systemNames.every(
    (x, i) =>
      stepNumbers[i] <= stepNumbers[i + systemNames.slice(i + 1).indexOf(x) + 1]
  );
}

// function checkStepNumbers(systemNames, stepNumbers) {
//   const groupBy = (x, f) =>
//     x.reduce((a, b, i) => ((a[f(b, i, x)] ||= []).push(b), a), {});

//   let arrayMaped = systemNames.map((x, i) => {
//     return { systemName: x, stepNumber: stepNumbers[i] };
//   });
//   return groupBy(arrayMaped, (v) => v.systemName);

// }
