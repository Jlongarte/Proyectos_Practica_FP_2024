const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];
function repeatCounter(list) {
  const count = {};

  for (let i = 0; i < list.length; i++) {
    const word = list[i];
    if (count[word]) {
      count[word]++;
    } else {
      count[word] = 1;
    }
  }

  return count;
}

console.log(repeatCounter(words));

console.log(repeatCounter(words));
