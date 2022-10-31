function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonColor = document.querySelector(".change-color");
const span = document.querySelector(".color");

function changeButtonColor(color) {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = `${randomColor}`;
  span.textContent = `${randomColor}`;
}

buttonColor.addEventListener("click", changeButtonColor);
// В 9 завданні у вас різні кольори в текст контенті 
// спана та бекграунді боді, тому що ви 2 рази виклкикаєте
//  getRandomHexColor і вона повертає 2 різні кольори.
//Її потрібно в колбекі слухача викликати один раз, 
// зберігати колір в змінну і потім використовувати цей колір щоб записати його в текст контент спана, та бекграунд боді