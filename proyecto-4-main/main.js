import "./style.css";
import Header from "./components/Header/Header";
import AboutMe from "./components/About/About";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

const init = () => {
  Header();
  AboutMe();
  Education();
  Projects();
  Footer();
};

init();
