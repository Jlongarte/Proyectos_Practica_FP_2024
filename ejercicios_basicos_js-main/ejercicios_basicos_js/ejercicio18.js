const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

function removeUnwantedPlaces(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].id !== 11 && array[i].id !== 40) {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(removeUnwantedPlaces(placesToTravel));
