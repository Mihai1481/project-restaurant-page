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

createTitle();
// loadHome();
// loadMenu();
loadContact();
createFooter();
