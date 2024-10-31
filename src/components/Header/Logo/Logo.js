import logoIMG from "./logo.svg";
import "./Logo.css";

export default function Logo() {
  const link = document.createElement("a");
  link.classList.add("logo");
  link.href = "/";

  link.innerHTML = logoIMG;
  return link;
}
