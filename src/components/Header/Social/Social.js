import "./Social.css";
import instaImg from "./Instagram.svg";
import linkedImg from "./Linkedin.svg";
import gitImg from "./Github.svg";

export default function Social() {
  const social = document.createElement("div");
  social.classList.add("social");

  const instaLink = document.createElement("a");
  instaLink.classList.add("social-link");
  instaLink.innerHTML = instaImg;

  const linkedLink = document.createElement("a");
  linkedLink.classList.add("social-link");
  linkedLink.innerHTML = linkedImg;

  const gitLink = document.createElement("a");
  gitLink.classList.add("social-link");
  gitLink.innerHTML = gitImg;

  social.appendChild(linkedLink);
  social.appendChild(instaLink);
  social.appendChild(gitLink);

  return social;
}
