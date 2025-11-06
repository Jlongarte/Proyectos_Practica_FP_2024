import "./Projects.css";
import { projects } from "../../data/projects";

// Función para generar el HTML de cada proyecto
const ProjectCard = (project) => `
  <div class="project-card">
    <img class="project-image" src="${project.image}" alt="${project.title}" />
    <div class="project-info">
      <h2>${project.title}</h2>
      <p>Tecnologías: ${project.tech.join(", ")}</p>
      <a href="${project.github}" target="_blank">
        <img class="github-icon" src="/assets/github.jpg"alt="GitHub Icon" />
      </a>
      <a href="${project.link}" target="_blank">
        <img class="github-icon" src="/assets/link.jpg"alt="Link Icon" />
      </a>
    </div>
  </div>
`;

// Función para pintar los proyectos en la página
export const Projects = () => {
  const main = document.querySelector("main");

  // Añadimos la estructura general de la sección al main
  main.innerHTML = `
    <section class="projects">
      <h2>Featured Projects</h2>
      <div class="projects-container"></div>
    </section>`;

  const container = document.querySelector(".projects-container");

  // Bucle para generar cada proyecto y añadirlo al contenedor
  for (const project of projects) {
    const figure = document.createElement("figure");
    figure.innerHTML = ProjectCard(project);
    container.appendChild(figure);
  }
};
