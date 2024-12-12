import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu";

function createTitle() {
  const header = document.querySelector("header");
  header.classList.add("header");

  const title = document.createElement("h1");
  title.textContent = "Sport Pub";
  header.insertBefore(title, header.firstChild);

  return header;
}

function createFooter() {
  const footer = document.querySelector("footer");
  footer.textContent = "Copyright © 2024 Mihai1481";

  return footer;
}

const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => {
  loadHome();
});

const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", () => {
  loadMenu();
});

const contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", () => {
  loadContact();
});

createTitle();
loadHome();
createFooter();
