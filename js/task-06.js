
const textInput = document.getElementById('validation-input');

textInput.addEventListener("blur", () => {
    const textForCheck = textInput.value.length;
    const findQuantity = document.querySelector('input');
    const maximumNumbers = parseInt(findQuantity.getAttribute("data-length"));

    if (textForCheck === maximumNumbers) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    };
        
});
 
   
// Задание 6
// Напиши скрипт, который при потере фокуса на
// инпуте(событие blur), проверяет его содержимое на 
// правильное количество введённых символов.
 
//     Сколько символов должно быть в инпуте, указывается 
// в его атрибуте data - length.
// Если введено подходящее количество символов, то 
// border инпута становится зелёным, если неправильное -
//     красным.
// Для добавления стилей, используй CSS - классы valid 
// и invalid, которые мы уже добавили в исходные файлы задания.

