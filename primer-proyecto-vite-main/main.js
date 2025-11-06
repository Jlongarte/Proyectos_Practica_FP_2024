import "./style.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import { Projects } from "./pages/Projects/Projects";

//Creamos una funcion que ejecutara todas nuestras funciones, asi el codigo sera mas limpio

const create = () => {
  Header();
  Footer();
  Home();

  document.querySelector("#homeLink").addEventListener("click", () => Home());
  document
    .querySelector("#aboutLink")
    .addEventListener("click", () => AboutMe());
  document
    .querySelector("#projectsLink")
    .addEventListener("click", () => Projects());
  document
    .querySelector("#contactoLink")
    .addEventListener("click", () => AboutMe());
};

create();
