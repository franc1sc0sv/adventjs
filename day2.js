const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // formato MM/DD

function countHours(year, holidays) {
  return holidays.map((x) => {
    return new Date(year + "/" + x).getDay();
  }).filter((day) => day != 0 && day != 6).length * 2
}

// function countHours(year, holidays) {
//   const hours = holidays.map((x) => {
//     let day = new Date(year + "/" + x).getDay();
//     return day == 0 || day == 6 ? 0 : 2;
//   });
//   return hours.reduce((a, b) => a + b, 0);
// }
console.log(countHours(year, holidays));
