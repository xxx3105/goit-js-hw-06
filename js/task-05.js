
const fieldForma = document.getElementById('name-input');
 
let viewedText = document.getElementById('name-output');
 
fieldForma.addEventListener('input', () => {
    viewedText.textContent = fieldForma.value;
    
    if (fieldForma.value === '') {
    viewedText.textContent = "Anonymous";
    }
});


// Напиши скрипт который, при наборе текста в инпуте
//  input#name - input(событие input), подставляет
//   его текущее значение в span#name - output.Если 
//   инпут пустой, в спане должна отображаться строка "Anonymous".