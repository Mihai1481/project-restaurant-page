import cola from "/home/mihaiodin/Odin/project-restaurant-page/src/assets/cola.png";
import water from "/home/mihaiodin/Odin/project-restaurant-page/src/assets/water.png";
import beer from "/home/mihaiodin/Odin/project-restaurant-page/src/assets/beer.png";
import wine from "/home/mihaiodin/Odin/project-restaurant-page/src/assets/wine.png";

const drinkImages = {
  cola: cola,
  water: water,
  beer: beer,
  wine: wine,
};

function createMenu() {
  const container = document.createElement("div");
  container.classList.add("container");

  container.appendChild(createMenuItem("Cola", "2$"));
  container.appendChild(createMenuItem("Beer", "3$"));
  container.appendChild(createMenuItem("Water", "1$"));
  container.appendChild(createMenuItem("Wine", "4$"));

  return container;
}

function createMenuItem(name, price) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodImage = document.createElement("img");

  foodImage.src = drinkImages[name.toLowerCase()];
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
