
//part1

const categoriesCalc = document.querySelectorAll('h2');

let countCat = 0;

categoriesCalc.forEach(() => {
    countCat++;
});

console.log(`Number of categories: ${countCat}`);

//part2

const nameOfCategory = document.querySelectorAll('.item');

nameOfCategory.forEach(data => {
        
    console.log(`Category: ${data.firstElementChild.textContent}`)
    console.log(`Elements: ${data.lastElementChild.children.length}`)
});

//////////////////////////////////////////////////////////////////

 

// Напиши скрипт который:

//     // Посчитает и выведет в консоль количество категорий в ul#categories, то есть
//     элементов li.item.
//     // Для каждого элемента li.item в списке ul#categories, найдет и выведет
//     в консоль текст заголовка элемента (тега < h2 >) и количество элементов
//      в категории(всех вложенных в него < li >).
// // Для выполнения этой задачи нужно использовать метод forEach() и свойства
// навигации по DOM.

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


//opt1

// const categoriesCalc = document.querySelectorAll('h2');

// const categoriesCalcRes = categoriesCalc.length;

// console.log(`Number of categories: ${categoriesCalcRes}`)

