const numbers = [1, 2, 3, 5, 45, 37, 58];

function suma(numberList) {
  let sum = 0;
  for (let i = 0; i < numberList.length; i++) {
    sum = numberList[i] + sum;
  }
  return sum;
}

console.log(suma(numbers));
