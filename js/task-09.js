//Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
//Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const body = document.querySelector("body");

button.addEventListener("click", handleClick);

function handleClick() {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  colorName.textContent = currentColor;
}
