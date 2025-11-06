import "./Header.css";

//Definir una función que crea el template

const template = () => {
  return `
  <section class="header">
    <h1>MI Portfolio</h1>
    <nav>
      <ul>
       <li>
        <a href="#null" id="homeLink">Inicio</a>
      </li>
      <li>
        <a href="#null" id="projectsLink">Proyectos</a>
      </li>
      <li>
        <a href="#null" id="aboutLink">Contacto</a>
      </li>
      
     
    </ul>
    </nav>
    </header>
  `;
};

const Header = () => {
  //Recupero la etiqueta Header del HTML
  const header = document.querySelector("header");
  header.innerHTML = template();
};

//Eportamos la funcion Header

export default Header;
