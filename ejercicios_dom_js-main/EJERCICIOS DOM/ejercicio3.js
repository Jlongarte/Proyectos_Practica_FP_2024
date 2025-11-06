/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const ul = document.createElement("ul");

for (const country of countries) {
  const li = document.createElement("li");
  li.innerHTML = country;
  ul.appendChild(li);
}

document.body.appendChild(ul);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elemento = document.querySelectorAll(".fn-remove-me");
for (let i = 0; i < elemento.length; i++) {
  elemento[i].remove();
}
/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const lista = document.createElement("ul");

const div = document.querySelector("[data-function='printHere']");
for (const car of cars) {
  const item = document.createElement("li");
  item.innerHTML = car;
  lista.appendChild(item);
}

document.body.appendChild(lista);

/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/
const paises = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const pais of paises) {
  const div = document.createElement("div");
  const h4 = document.createElement("h4");
  const img = document.createElement("img");

  h4.innerHTML = pais.title;
  img.src = pais.imgUrl;

  div.appendChild(h4);
  div.appendChild(img);

  document.body.appendChild(div);
}
/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.*/

const button = document.createElement("button");
button.innerHTML = "Eliminar último";
document.body.appendChild(button);

button.addEventListener("click", function () {
  const allDivs = document.querySelectorAll("body > div");
  if (allDivs.length > 0) {
    const lastDiv = allDivs[allDivs.length - 1];
    lastDiv.remove();
  }
});
/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.*/

const h3 = document.createElement("h3");
h3.innerHTML = "DIVS DEL EJERCICIO 6 CON BOTÓN";
document.body.appendChild(h3);

for (const pais of paises) {
  const div = document.createElement("div");
  const h4 = document.createElement("h4");
  const img = document.createElement("img");
  const button = document.createElement("button");

  h4.innerHTML = pais.title;
  img.src = pais.imgUrl;
  button.innerHTML = "Eliminar este div";

  button.addEventListener("click", function () {
    div.remove();
  });

  div.appendChild(h4);
  div.appendChild(img);
  div.appendChild(button);

  document.body.appendChild(div);
}
