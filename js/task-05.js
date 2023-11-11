const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", hangleInput);

function hangleInput(event) {
  spanEl.textContent = inputEl.value;
  if (inputEl.value === null) {
    spanEl.textContent = "Anonymous";
  }
}
