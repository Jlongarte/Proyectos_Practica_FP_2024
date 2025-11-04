import "./Header.css";
import { Button } from "../Button/Button";

const Template = () => `
<div class= "container">
     ${Button("Contactame", "btn-footer", "mailto:longarte.janire@gmail.com")}
    <nav>
    <ul>
      <li><a href="#sobre-mi">Sobre Mí</a></li>
      <li><a href="#titulos-academicos">Títulos Académicos</a></li>
      <li><a href="#titulos-academicos">Experiencia Laboral</a></li>
      <li><a href="#proyectos">Proyectos</a></li
      </ul>
    </nav>
</div>
`;

const Header = () => {
  document.querySelector("Header").innerHTML = Template();
};

export default Header;
