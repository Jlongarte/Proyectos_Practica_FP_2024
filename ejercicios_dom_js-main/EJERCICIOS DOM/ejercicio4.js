/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/
const button = document.querySelector("button");
button.onclick = function (ev) {
  console.log(ev);
};
//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const input = document.querySelector(".focus");

input.addEventListener("focus", function () {
  console.log(input.value);
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const input2 = document.querySelector(".value");

input2.addEventListener("input", function () {
  console.log(input.value);
});

//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
//que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.createElement("ul");

for (const album of albums) {
  const li = document.createElement("li");
  li.innerHTML = album;
  ul.appendChild(li);
}

document.body.appendChild(ul);
