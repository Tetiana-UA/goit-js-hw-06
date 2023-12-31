//Напиши скрипт, який:

//   Порахує виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//    Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

//Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const title = category.querySelector("h2");
  console.log(`Category:${title.textContent}`);

  const liInCategories = category.querySelectorAll("li");
  console.log(`Elements:${liInCategories.length}`);
});
