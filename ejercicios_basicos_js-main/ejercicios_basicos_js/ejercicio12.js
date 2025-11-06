const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(list) {
  const newArray = [];

  for (let i = 0; i < list.length; i++) {
    if (!newArray.includes(list[i])) {
      newArray.push(list[i]);
    }
  }

  return newArray;
}

console.log(removeDuplicates(duplicates));
