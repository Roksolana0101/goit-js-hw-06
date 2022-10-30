function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonColor = document.querySelector(".change-color");
const span = document.querySelector(".color");

function changeButtonColor(color) {
  document.body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}

buttonColor.addEventListener("click", changeButtonColor);