import "./Footer.css";

export default function Footer() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "crafted in 2024";
  return footer;
}
