function createMenu() {
  const container = document.createElement("div");
  container.classList.add("container");

  container.appendChild(createMenuItem("Cola", "3$"));
  container.appendChild(createMenuItem("Cola", "3$"));
  container.appendChild(createMenuItem("Cola", "3$"));
  container.appendChild(createMenuItem("Cola", "3$"));

  return container;
}

function createMenuItem(name, price) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodImage = document.createElement("img");
  foodImage.src = `${name.toLowerCase()}.png`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(createText(`${name}`));
  menuItem.appendChild(createText(`${price}`));

  return menuItem;
}

function createText(text) {
  const content = document.createElement("p");
  content.textContent = text;

  return content;
}

function loadMenu() {
  const main = document.getElementById("content");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
