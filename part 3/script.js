// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempamplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const currTemp = temp[i];
    if (typeof currTemp !== "number") {
      continue;
    }
    if (currTemp > max) {
      max = currTemp;
    }
    if (currTemp < min) {
      min = currTemp;
    }
  }
  console.log(max , min)
  return max - min
};

console.log(calcTempamplitude(temperatures))
