import "./Nav.css";

export default function Nav(NAV_LINKS) {
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const list = document.createElement("ul");
  list.classList.add("nav-list");

  NAV_LINKS.forEach((link) => {
    const navItem = document.createElement("li");
    navItem.classList.add("nav-list__item");
    const linkItem = document.createElement("a");
    linkItem.setAttribute("data-link", link.url);
    linkItem.textContent = link.text;
    linkItem.href = link.url;
    navItem.appendChild(linkItem);
    list.appendChild(navItem);
  });

  nav.appendChild(list);
  return nav;
}
