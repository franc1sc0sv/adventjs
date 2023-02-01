function getCompleted(part, total) {
  const maximoComunDivisor = (a, b) => {
    let temporal;
    while (b != 0) {
      temporal = b;
      b = a % b;
      a = temporal;
    }
    return a;
  };
  const hoursToSeconds = (Number) => {
    let splitedNumber = Number.split(":");
    return (
      splitedNumber[0] * 60 * 60 + splitedNumber[1] * 60 + +splitedNumber[2]
    );
  };
  const totalSeconds = hoursToSeconds(total);
  const partSeconds = hoursToSeconds(part);
  const taskTime = maximoComunDivisor(totalSeconds, partSeconds);

  return `${partSeconds / taskTime}/${totalSeconds / taskTime}`;
}

console.log(getCompleted("01:10:10", "03:30:30"));
