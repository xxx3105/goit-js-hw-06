
function getRandomHexColor() {
 
const displayCodeColor = document.querySelector(".color");
 
const colorAkkum = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;

document.body.style.backgroundColor = colorAkkum; 
  
displayCodeColor.innerHTML = `<b>${colorAkkum}</b>`;

};

const buttonColorChanger = document.querySelector(".change-color");
buttonColorChanger.addEventListener("click", getRandomHexColor);
console.log(document);



// Задание 9
// Напиши скрипт, который изменяет цвета фона
// элемента < body > через инлайн стиль при клике
//  на button.change - color и выводит значение
//   цвета в span.color.


// Для генерации случайного цвета используй
//  функцию getRandomHexColor.
 