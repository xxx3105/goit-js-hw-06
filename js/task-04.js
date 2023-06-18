


//1Табло

const counterValue = document.querySelector('#value');
let basicNumber = 0

//2кнопки

//2.1. минус

const descrementButton = document.querySelector('#counter');
const buttonMinus = descrementButton.firstElementChild;
const minusAction = 1;

//2.2. плюс
const incrementButton = document.querySelector('#counter');
const buttonPlus = incrementButton.lastElementChild;
const plusAction = 1;

//4 механика

buttonPlus.addEventListener("click", () => {
  
    basicNumber++;
    document.getElementById("value").innerHTML = basicNumber;
});

buttonMinus.addEventListener("click", () => {
    basicNumber--;
    document.getElementById("value").innerHTML = basicNumber;
});



// Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике,
//     должны увеличивать и уменьшать его значение на единицу.


//     Создай переменную counterValue в которой будет храниться 
// текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай 
// или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.