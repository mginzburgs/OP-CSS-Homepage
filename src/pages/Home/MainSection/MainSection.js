import "./MainSection.css";

export default function MainSection() {
  const section = document.createElement("section");
  section.classList.add("main-section");

  const name = document.createElement("div");
  name.classList.add("main-section__name");
  name.textContent = "Mihail";

  const surname = document.createElement("div");
  surname.classList.add("main-section__surname");
  surname.innerHTML = `G<span class='i-accent'>i</span>nzburg`;

  const secondaryText = document.createElement("div");
  secondaryText.classList.add("main-section__secondary-text");
  secondaryText.textContent = "Coding Creativity into Reality";

  section.appendChild(name);
  section.appendChild(surname);
  section.appendChild(secondaryText);

  return section;
}
