const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

createMarkup(ingredients);

function createMarkup(ingredients) {
  const nodesArr = ingredients.map((ingredient, index) => {
    const liEl = document.createElement("li");
    const h2El = document.createElement("h2");
    h2El.textContent = ingredients[index];
    liEl.append(h2El);
    return liEl;
  });

  console.log(nodesArr);

  list.append(...nodesArr);
}
