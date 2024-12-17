import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu";
import "./styles/page.css";

function createTitle() {
  const header = document.querySelector("header");
  header.classList.add("header");

  const title = document.createElement("h1");
  title.textContent = "F C B Pub";
  header.insertBefore(title, header.firstChild);

  return header;
}

function setClass(element, newClass) {
  element.className = newClass;
}

function createFooter() {
  const footer = document.querySelector("footer");
  footer.textContent = "Copyright © 2024 Mihai1481";

  return footer;
}

const content = document.getElementById("content");

const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => {
  loadHome();
  setClass(content, "home");
});

const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", () => {
  loadMenu();
  setClass(content, "menu");
});

const contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", () => {
  loadContact();
  setClass(content, "contact");
});

createTitle();
loadHome();
createFooter();
