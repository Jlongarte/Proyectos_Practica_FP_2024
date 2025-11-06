const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
  sumNumber = 0;
  sumArray = 0;

  for (i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      sumNumber += list[i];
    } else if (typeof list[i] === "string") {
      sumArray += list[i].length;
    }
  }

  return (sumNumber + sumArray) / list.length;
}

console.log(averageWord(mixedElements));
