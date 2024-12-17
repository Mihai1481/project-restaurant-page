import logo from "/home/mihaiodin/Odin/project-restaurant-page/src/assets/barcelona-fc-logo.png";
// import "./styles/home.css";

function createHome() {
  const container = document.createElement("div");
  container.classList.add("container");

  const logoImage = document.createElement("img");
  logoImage.src = logo;

  container.appendChild(createText("Best Team"));
  container.appendChild(createText("In the world"));
  container.appendChild(logoImage);
  container.appendChild(createText("VISCA BARCELONA!"));

  return container;
}

function createText(text) {
  const content = document.createElement("p");
  content.textContent = text;

  return content;
}

function loadHome() {
  const main = document.getElementById("content");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
