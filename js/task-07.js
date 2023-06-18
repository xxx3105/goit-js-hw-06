

const regulator = document.getElementById('font-size-control');
const value = document.getElementById('text');

regulator.addEventListener("input", (event) => {
   
let sizeFont = `${event.target.value}px`;
value.style.fontSize = sizeFont;
    
});



// Задание 7

// Напиши скрипт, который реагирует на изменение 
// значения input#font - size - control(событие input)
//  и изменяет инлайн - стиль span#text обновляя свойство
// font - size.В результате при перетаскивании ползунка 
// будет меняться размер текста.
