// Array(массив) - коллекция данных

// 1. Создание массивов
// - создание пустого массива
const newArray = new Array();
console.log(newArray); // []

// - создание пустого массива через [] - БУДЕМ ИСПОЛЬЗОВАТЬ ЭТОТ СПОСОБ В ДАЛЬНЕЙШЕМ
const emptyArray = [];
console.log(emptyArray);

// - создание новго массива со значениями по умолчанию
const animals = ["Dog", "Cat", "Rat", "Tiger", "Lion"];
// console.log(animals);

// 2. Доступ к элементам массива
// - доступ к элементам массива мы получаем через index
// - index - это порядковый номер элемента в массиве
// - index элемента считается от 0. т.е первый элемент в массиве будет иметь index === 0
let rat = animals[2];
// console.log(rat);

// Пример: выести в консоль Lion из массива animals
// console.log(animals[4]);

// - перезапись элементов массива
// заменить 3 элемент массива на Pig
animals[2] = "Pig";
// console.log(animals);

// - добавить элемент Rat  в конце массива animals
animals[5] = rat;
// console.log(animals);

// 3. Длина массива
// length - свойство, позволяющее узнать длину массива
// console.log(animals.length);

// 4. Тип данных массивов
console.log(typeof animals); // object

// 5. Хранение различных типов данных в одном массиве
const mixredArray = [
  0,
  "Hello",
  true,
  animals,
  { id: "1", fullName: "John Johnson", age: 20 },
];

console.log(mixredArray);

// 6. Методы массивов pop/push, shift/unshift
const fruits = ["Apple", "Orange", "Cherry", "Pineapple"];
console.log(fruits);

// - push() - метод массивов, который добавляет элемент в конец массива
fruits.push("Grape");
console.log(fruits);

// - pop() - метод массива, который удаляет элемент с конца массива(при этом возвращает удаленный элемент.Например в переменную)
let grape = fruits.pop();
console.log(grape);
console.log(fruits);

// - unshift() -  метод массива, котрый добавляет элемент в начало массива
fruits.unshift("Pear");
console.log(fruits);

// - shift() - удаляет первый элемент массива(при этом возвращает удаленный элемент.Например в переменную)
let pear = fruits.shift();
console.log(fruits);
console.log(pear);

// push/pop vs unshift/shift - быстрее будет push/pop

//////////////////////////////////////////////////////////////////////////////////////////////////
// Циклы
// 1. for
const users = [
  "John Johnson",
  "Brat Pitt",
  "Johny Depp",
  "Marlin Monro",
  "Harrison Ford",
  "Jim Kerry",
];

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// console.log(users[4]);
// console.log(users[5]);

// Пример: вывести все элементы массива
// for (let index = 0; index < users.length; index++) {
//   console.log(users[index]);
// }

// Пример: вывести все элементы массива, но не выводить 2 элемент
// for (let index = 0; index < users.length; index++) {
//   if (index === 1) {
//     continue;
//   } else {
//     console.log(users[index]);
//   }
// }

// Пример: когда цикл найдет Marlin Monro, то прерываем цикл и вернем в переменную имя Marlin Monro

let marlin;

for (let index = 0; index < users.length; index++) {
  if (users[index] === "Marlin Monro") {
    marlin = users[index];
    break; // прерывает цикл
  } else {
    // console.log(users[index]);
  }
}
console.log(marlin);

// 2. while
const countries = ["Poland", "Germany", "Italy", "Latvia", "USA"];

let i = 0;

while (i < countries.length) {
  console.log(countries[i]);
  i++;
}

// 3. do while
let number = 6;

do {
  console.log("Срабатывает в любом случае. Хотя бы 1 раз");
  number++;
} while (number < 6);

////////////////////////////////////////////////////////////////////////////////////////////
// Primitive types and Non-Primitive types

// let userName = "Anna";
// // console.log(userName);
// userName = "Irina";
// // console.log(userName);

// let userName2 = userName;
// // console.log(userName2); // Irina
// userName = "Elena";
// console.log(userName); // "Elena"
// console.log(userName2); // "Irina"

// const message = "Hello";
// console.log(message);
// message = "Hello World";

// ///////////////////////////////////////////
// let cars = ["Porshe", "Mrcedes", "BMW"];
// let cars2 = cars;
// console.log(cars); // ["Porshe", "Mrcedes", "BMW"]
// console.log(cars2); // ["Porshe", "Mrcedes", "BMW"]
// cars.push("Fiat");
// console.log(cars); // [ 'Porshe', 'Mrcedes', 'BMW', 'Fiat' ]
// console.log(cars2); // [ 'Porshe', 'Mrcedes', 'BMW', 'Fiat' ]
