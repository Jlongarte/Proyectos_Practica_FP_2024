import "./Education.css";
import data from "/datos";
import { Button } from "/components/Button/Button";

const template = (content) => {
  return `
      <section class="mainContent">
          ${content}
      </section>
  `;
};

const showInfo = () => {
  const content = `
    <p>${data.education.degree}</p>
    <p>${data.education.university}</p>
    <p>Año de Graduación: ${data.education.graduationYear}</p>
    <p>Honores: ${data.education.honors}</p>
  `;
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = template(content);
  contentDiv.querySelector(".mainContent").classList.add("visible");
};

const showSkills = () => {
  let skillsList = "<ul>";
  for (const skill of data.skills) {
    skillsList += `<li>${skill}</li>`;
  }
  skillsList += "</ul>";

  const content = `
    <h2>Habilidades</h2>
    ${skillsList}
  `;
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = template(content);
  contentDiv.querySelector(".mainContent").classList.add("visible");
};

const Education = () => {
  const buttons = `
    <div class="controls">
      ${Button("Mostrar Información", "btn-info", "")}
      ${Button("Mostrar Habilidades", "btn-skills", "")}
    </div>
    <div id="content"></div>
  `;

  document.querySelector(".education").innerHTML = buttons;

  document.querySelector(".controls").addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-info")) {
      showInfo();
    } else if (event.target.classList.contains("btn-skills")) {
      showSkills();
    }
  });
};

export default Education;
