import "./ProjectsPage.css";
import { PROJECTS } from "./PROJECTS.JS";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";

export default function ProjectsPage() {
  const projectPage = document.createElement("div");
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("projects__container");
  projectPage.classList.add("projects", "homepage");
  projectPage.appendChild(Header());
  PROJECTS.forEach((project) => {
    const projectCard = card(project);
    projectContainer.appendChild(projectCard);
  });
  projectPage.appendChild(projectContainer);
  projectPage.appendChild(Footer());
  return projectPage;
}

function card(project) {
  const card = document.createElement("div");
  card.classList.add("projects__card");
  card.innerHTML = `
    <h2 class="card__heading">${project.name}</h2>
    <img src="${project.img}" alt="project.name" class="card__img">
    <p class="card__text">${project.description}</p>
    `;
  return card;
}
