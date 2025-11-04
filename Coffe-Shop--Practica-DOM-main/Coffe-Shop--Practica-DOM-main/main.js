const theme = document.querySelector("#theme");
const main = document.querySelector("main");

theme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  main.classList.toggle("dark");
});

const coffeeProducts = [
  {
    name: "Espresso Roast",
    intensity: "High",
    stars: 4.8,
    photo:
      "https://www.starbucks.es/sites/starbucks-es/files/styles/c06_cards_grid_560x321/public/2022-03/SBX-UK-MOP-Latte.jpg.webp?itok=kzeWI4WW",
    price: 12.99,
  },
  {
    name: "House Blend",
    intensity: "Medium",
    stars: 4.5,
    photo:
      "https://www.starbucks.es/sites/starbucks-es/files/styles/c06_cards_grid_560x321/public/2022-03/SBX-UK-MOP-Mocha.jpg.webp?itok=3aA-qhzN",
    price: 10.49,
  },
  {
    name: "Colombian Coffee",
    intensity: "Medium",
    stars: 4.6,
    photo:
      "https://www.starbucks.es/sites/starbucks-es/files/styles/c06_cards_grid_560x321/public/2022-03/SBX-UK-MOP-CoffeeFrappuccino.jpg.webp?itok=RJh34Og5",
    price: 11.99,
  },
  {
    name: "French Roast",
    intensity: "Dark",
    stars: 4.7,
    photo:
      "https://www.starbucks.es/sites/starbucks-es/files/styles/c06_cards_grid_560x321/public/2022-03/SBX-UK-MOP-CaramelFrappuccino.jpg.webp?itok=jEAoBLsy",
    price: 13.49,
  },
  {
    name: "Sumatra Mandheling",
    intensity: "Full Body",
    stars: 4.9,
    photo:
      "https://www.starbucks.es/sites/starbucks-es/files/styles/c06_cards_grid_560x321/public/2022-03/SBX-UK-MOP-MatchaGreenTeaLatte.jpg.webp?itok=4wQ0kJOa",
    price: 14.99,
  },
  {
    name: "Caffè Americano",
    intensity: "Medium",
    stars: 4.4,
    photo:
      "https://www.starbucks.es/sites/starbucks-es/files/styles/c06_cards_grid_560x321/public/2022-03/SBX-UK-MOP-StrawberryAcaiRefresha.jpg.webp?itok=jpwa9MGR",
    price: 9.99,
  },
  {
    name: "Brazilian Santos",
    intensity: "Mild",
    stars: 4.3,
    photo:
      "https://www.starbucks.es/sites/starbucks-es/files/styles/c10_2_col_text_560x467/public/2021-11/Flat%20White.jpeg.webp?itok=SFHAapjp",
    price: 10.99,
  },
  {
    name: "Italian Roast",
    intensity: "Dark",
    stars: 4.6,
    photo:
      "https://www.starbucks.es/sites/starbucks-es/files/styles/c10_2_col_text_560x467/public/2021-11/Espresso.jpeg.webp?itok=V8YZePTy",
    price: 13.99,
  },
  {
    name: "Light Breakfast Blend",
    intensity: "Light",
    stars: 4.5,
    photo:
      "https://www.starbucks.es/sites/starbucks-es/files/styles/c10_2_col_text_560x467/public/2022-03/cappuccino%20freddo.png.webp?itok=iBqXrVJJ",
    price: 10.49,
  },
  {
    name: "Decaf Coffee",
    intensity: "Medium",
    stars: 4.2,
    photo:
      "https://www.starbucks.es/sites/starbucks-es/files/styles/c10_2_col_text_560x467/public/2022-03/SBX-UK-MOP-Caffe%CC%80Americano.jpg.webp?itok=zIywpvVF",
    price: 11.49,
  },
];

const feature = document.querySelector("#feature-products");

for (const coffee of coffeeProducts) {
  const featureProduct = document.createElement("div");
  featureProduct.classList.add("feature-product"); // Agregando clase para el estilo

  const title = document.createElement("h5");
  title.innerHTML = coffee.name;
  featureProduct.appendChild(title);

  const intensity = document.createElement("p");
  intensity.innerHTML = coffee.intensity;
  featureProduct.appendChild(intensity);

  const stars = document.createElement("p");
  stars.innerHTML = coffee.stars + `<span class="star">&#9733;</span>`;
  featureProduct.appendChild(stars);

  const image = document.createElement("img");
  image.src = coffee.photo;
  image.alt = "Product photo";
  featureProduct.appendChild(image);

  const price = document.createElement("span");
  price.innerHTML = coffee.price + ` €`;
  featureProduct.appendChild(price);

  feature.appendChild(featureProduct); // Añadir el producto al contenedor de productos destacados
}
