const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const resultat = document.querySelector('#ingredients');

ingredients.forEach(data => {

const listFood = document.createElement("li");
  
listFood.textContent = data;
listFood.classList.add('item')
resultat.append(listFood);
  
console.log(listFood);

});

console.log(document);







// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// // Напиши скрипт, который для каждого элемента 
// массива ingredients:

// // Создаст отдельный элемент <li>. Обзательно 
// используй метод document.createElement().
//   // Добавит название ингредиента как его текстовое 
//   содержимое.
// // Добавит элементу класс item.

// // После чего вставит все <li> за одну операцию
//  в список ul#ingredients.