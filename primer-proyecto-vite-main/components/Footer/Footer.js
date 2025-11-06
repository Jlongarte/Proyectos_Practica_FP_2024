import "./Footer.css";
import { Button } from "../Button/Button";

const template = () => {
  return `
    <h2>Contact</h2>
    <div>
      ${Button("/assets/github.jpg", "GitHub", "https://github.com/Jlongarte")}
      ${Button(
        "/assets/linkedin.jpg",
        "LinkedIn",
        "https://www.linkedin.com/in/%F0%9F%92%BB-janire-gonzalez-13aa78258/"
      )}
    </div>
  `;
};

const Footer = () => {
  //Recupero la etiqueta Footer del HTML
  const footer = document.querySelector("footer");
  footer.innerHTML = template();
};

export default Footer;
