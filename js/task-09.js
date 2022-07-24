function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const widget = document.querySelector(`.widget`);

const changeColorBtn = document.querySelector(`.change-color`);

const valueColor = document.querySelector(`.color`);

changeColorBtn.addEventListener(`click`, handlerChangeColorBtn);

function handlerChangeColorBtn(event) {

  document.body.style.backgroundColor = getRandomHexColor();

  valueColor.textContent = document.body.style.backgroundColor;

  return event;
}

