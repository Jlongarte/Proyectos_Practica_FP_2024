/*Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.*/

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  let longestWord = "";
  let maxLength = 0;

  for (let i = 0; i < stringList.length; i++) {
    const word = stringList[i];
    const wordLength = word.length;

    if (wordLength > maxLength) {
      longestWord = word;
      maxLength = wordLength;
    }
  }

  return longestWord;
}

console.log(findLongestWord(avengers));
