import "./Home.css";

export const Home = () => {
  const main = document.querySelector("main");
  main.innerHTML = `
    <section class="home">
    <div class="container">
    <p>Mi nombre es </p>
    <h1>Janire</h1>
    <p>Soy Desarrolladora Web es una agencia de Marketing Digital.
    Compagino mi trabajo en Madrid con Formación Profesional de DAW, en el cúal estoy reforzando mis conocimientos en lenguaje de marcas y lenguajes de programación Front y Back</p>
    <a id ="contactoLink" >Ponte en Contacto →</a>
    </div>
    </section>`;
};
