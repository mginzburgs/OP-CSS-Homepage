import "./Header.css";
import Nav from "./Nav/Nav.js";
import Logo from "./Logo/logo.js";
import Social from "./Social/Social.js";

const NAV_LINKS = [
  { text: "About", url: "/" },
  { text: "Projects", url: "/projects" },
  { text: "Contacts", url: "/contact" },
];

export default function Header() {
  const header = document.createElement("header");
  header.classList.add("header");

  header.appendChild(Logo());
  header.appendChild(Nav(NAV_LINKS));
  header.appendChild(Social());

  return header;
}
