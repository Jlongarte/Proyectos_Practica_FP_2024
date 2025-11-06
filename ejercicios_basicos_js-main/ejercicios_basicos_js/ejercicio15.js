const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

function mostrarCamisetas(lista) {
  const camisetas = [];

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].includes("Camiseta")) {
      camisetas.push(lista[i]);
    }
  }

  return camisetas;
}

console.log(mostrarCamisetas(products));
