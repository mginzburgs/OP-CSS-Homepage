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
  const path = window.location.pathname === "" ? "/" : window.location.pathname;
  const app = document.getElementById("app");

  app.innerHTML = "";

  const pageComponent = routes[path];
  app.append(pageComponent());
}

document.addEventListener("DOMContentLoaded", () => {
  router();

  document.addEventListener("click", (event) => {
    if (event.target.matches("[data-link]")) {
      event.preventDefault();
      const url = event.target.getAttribute("href");
      window.history.pushState(null, null, url);
      router();
    }
  });

  window.addEventListener("popstate", router);
});
