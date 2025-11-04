import "./Projects.css";
import data from "/datos";
import { Button } from "/components/Button/Button";

const template = (project) => `

    <article>
        <img src="${project.preview}" alt="${project.title}"/>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${Button("Saber Más", "btn", "link")}
    </article>

`;

const Projects = () => {
  const projects = data.projects.map((project) => template(project)).join("");

  document.querySelector(".projects").innerHTML = `
    <h2>Últimos Proyectos</h2>
    <div class="container">
    ${projects}
    </div>
  `;
};

export default Projects;
