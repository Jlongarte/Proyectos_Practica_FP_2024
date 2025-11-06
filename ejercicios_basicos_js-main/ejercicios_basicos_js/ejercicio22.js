/*Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

Recuerda no usar frutas duplicadas.

Finalmente, imprime el array resultante.*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

function remplazarFrutas(foodSchedule, fruits) {
  let fruitIndex = 0;

  for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {
      foodSchedule[i] = { name: fruits[fruitIndex], isVegan: true };
      fruitIndex++;
      if (fruitIndex >= fruits.length) {
        break; // Para evitar errores si hay más comidas no veganas que frutas
      }
    }
  }

  return foodSchedule;
}

const newFoodSchedule = remplazarFrutas(foodSchedule, fruits);
console.log(newFoodSchedule);
