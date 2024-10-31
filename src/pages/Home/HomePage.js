import "./HomePage.css";

import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import MainSection from "./MainSection/MainSection.js";

export default function HomePage() {
  const homepage = document.createElement("div");
  homepage.classList.add("homepage");
  homepage.appendChild(Header());
  homepage.appendChild(MainSection());
  homepage.appendChild(Footer());

  return homepage;
}
