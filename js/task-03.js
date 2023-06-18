const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


///1. Стили
const galleryPlace = document.querySelector('.gallery');
galleryPlace.classList.add('list-style')
 
///2. Создание галлереи

//вариант1 мне не нравится. :)

images.forEach(data => {

const gallery = document.createElement("li");
  
const size = "200";

const picturesInsert = `<img src="${data.url}" alt="${data.alt}" height="${size}">`;

gallery.insertAdjacentHTML("beforeend", picturesInsert);
  
galleryPlace.append(gallery)
   
console.log(gallery);
  
});

console.log(document)
 

 
// вариант2 не подходит по причине невозможности использования метода insertAdjacentHTML

// images.forEach(data => {

// const gallery = document.createElement("li");
// const pictures = document.createElement("img");

// pictures.src = data.url;
// pictures.alt = data.alt;
   
// gallery.appendChild(pictures);
   
// console.log(gallery);
  
// });



////ЗАДАЧА

// Напиши скрипт для создания галереи
//  изображений по массиву данных.В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

//   Используй массив объектов images для создания
// элементов < img > вложенных в < li >.Для создания разметки 
// используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну 
// операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или 
// гридами через CSS классы.