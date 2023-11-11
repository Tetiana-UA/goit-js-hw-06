const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

const itemsArr = [...items];
itemsArr.forEach((elem, index) => {
  const title = document.querySelector("h2");
  console.log(`Category:${title.textContent}`);
  console.log(`Elements:${elem.length}`);
});
console.dir(items);
