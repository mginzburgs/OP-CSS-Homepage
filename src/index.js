import HomePage from "./pages/Home/HomePage.js";
import ProjectsPage from "./pages/Projects/ProjectsPage.js";
import ContactPage from "./pages/Contact/ContactPage.js";
import "./style.css";

const routes = {
  "/": HomePage,
  "/projects": ProjectsPage,
  "/contact": ContactPage,
};

function router() {
  const path = window.location.hash.slice(1) || "/"; 
  const app = document.getElementById("app");

  app.innerHTML = "";

  const pageComponent = routes[path];

  if (typeof pageComponent === "function") {
    app.append(pageComponent());
  } else {
    app.innerHTML = "<h1>404 - Page Not Found</h1>";
  }
}


document.addEventListener("DOMContentLoaded", () => {
  router();

  document.addEventListener("click", (event) => {
    if (event.target.matches("[data-link]")) {
      event.preventDefault();
      const url = event.target.getAttribute("href");
      window.location.hash = url; 
    }
  });

  window.addEventListener("hashchange", router); 
