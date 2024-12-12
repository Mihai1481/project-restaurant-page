function createContact() {
  const container = document.createElement("div");
  container.classList.add("container");

  const foodImage = document.createElement("img");
  foodImage.src = "";

  container.appendChild(createText("123456789"));
  container.appendChild(createText("Adress"));
  container.appendChild(foodImage);

  return container;
}

function createText(text) {
  const content = document.createElement("p");
  content.textContent = text;

  return content;
}

function loadContact() {
  const main = document.getElementById("content");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
