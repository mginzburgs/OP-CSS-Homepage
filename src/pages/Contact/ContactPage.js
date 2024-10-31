import "./ContactPage.css";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";

export default function ContactPage() {
  const contactPage = document.createElement("div");
  contactPage.classList.add("contact-page", "homepage");

  const contacts = document.createElement("div");
  contacts.classList.add("contacts");
  contacts.textContent = "contact me";

  contactPage.appendChild(Header());
  contactPage.appendChild(contacts);
  contactPage.appendChild(Footer());
  return contactPage;
}
