//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const sizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = sizeControlEl.value + "px";
sizeControlEl.addEventListener("input", handleInput);

function handleInput(event) {
  textEl.style.fontSize = sizeControlEl.value + "px";
}
