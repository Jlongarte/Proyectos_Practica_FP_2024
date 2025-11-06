//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const div = document.createElement("div");
document.body.appendChild(div);
console.log(div);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divConParrafo = document.createElement("div");
const parrafo = document.createElement("p");
divConParrafo.appendChild(parrafo);
console.log(divConParrafo);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divConSeisParrafos = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const parrafo = document.createElement("p");
  divConSeisParrafos.appendChild(parrafo);
}

console.log(divConSeisParrafos);
document.body.appendChild(divConSeisParrafos); // Opcional: Insertar el `div` en el cuerpo del documento HTML.

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const dinamico = document.createElement("p");
dinamico.innerHTML = "Soy dinámico!";
document.body.appendChild(dinamico);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const titulo = document.querySelector(".fn-insert-here");
titulo.innerHTML = "Wubba Lubba dub dub";

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ul = document.createElement("ul");

for (const app of apps) {
  const li = document.createElement("li");
  li.innerHTML = app;
  ul.appendChild(li);
}

document.body.appendChild(ul);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const parrafosARemover = document.querySelectorAll(".fn-remove-me");

for (let i = 0; i < elementosARemover.length; i++) {
  parrafosARemover[i].remove();
}

/*2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.*/

let div1 = document.querySelector("div:nth-of-type(1)");
let div2 = document.querySelector("div:nth-of-type(2)");

div2.insertAdjacentHTML("beforebegin", "<p>Voy en medio!</p>");

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const allDivs = document.querySelectorAll(".fn-insert-here");
allDivs.insertAdjacentHTML("beforebegin", "<p>Voy en medio!</p>");
