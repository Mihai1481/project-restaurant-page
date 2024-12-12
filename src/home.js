function createHome() {
  const container = document.createElement("div");
  container.classList.add("container");

  container.appendChild(createText("Best Team"));
  container.appendChild(createText("In the world"));
  container.appendChild(createText("Tralal"));

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
