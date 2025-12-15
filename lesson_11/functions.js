// Функции

// Функции бываю 3 видов:
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Functions

// Функции бываю 2 типов:
// 1. функция, которая что-то выполняет и ничего не возвращает
// 2. функция, которая что-то возвращает и может что-то выполнить, но не обязательно(опционально!)
// Функция могут возвращать любой тип данных

/////////////////////////     //////////////////////////////////////////////////////////////////////////////////
// 1. Function Declaration
// Функция, которая что-то выполняет, но ничего не возвращает
// - создание 1 функции
// {} в функции - это тело функции, главное место в котором и пишется логика, которая должна выполняться
// () в функции - это аргументы функции(способ передачи функции каких-то значений)
sayHelloWorld(); // ошибки не будет, Function Declaration сначала инициализируется js, а лишь затем выполняется код в файле, т.е эти функции доступны вездеы
function sayHelloWorld() {
  console.log("Hello World!!!");
}

// Вызов функции
// sayHelloWorld();
// sayHelloWorld(); 
// sayHelloWorld();

let resultOfSayHelloWorld = sayHelloWorld();
console.log(resultOfSayHelloWorld); // undefined, т.к мы ничего не возвращаем из sayHelloWorld

////////////////////////////////////
// Функция, которая что-то возвращает
// Аргументы функции - способ передачи значений в функцию при ее использовании
// - если при использовании функции не пердать значения, хотя аргументы прописаны при ее создании, то такие аргументы === undefined
// - аргументам через знак "=" можно дать значения по умолчанию
function sum(number1 = 5, number2 = 5) {
  console.log(number1, number2);
  return number1 + number2;
}

let resultOfSum = sum(10, 5);
let resultOfSum1 = sum(20, 30);
let resultOfSum2 = sum(2, 2);
let resultOfSum3 = sum();
console.log(resultOfSum);
console.log(resultOfSum1);
console.log(resultOfSum2);
console.log(resultOfSum3);

///////////////////////////////////////////////////
// 2. Function Expression
// sayHi("John"); // будет ошибка, нельзя использовать Function Expression до ее создания(инициализации)
const sayHi = function (firstName) {
  return `Hello, ${firstName}`;
};

console.log(sayHi("Alex"));
console.log(sayHi("Kate"));

// 3. Arrow functions
const getFullName = (firstName, lastName) => {
  console.log(firstName, lastName);
  return `${firstName} ${lastName}`;
};

console.log(getFullName("John", "Johnson"));
console.log(getFullName("Alex", "Hitch"));

// 3.1 Сокращаем слово return

const getFullNameWithoutReturnWord = (firstName, lastName) =>
  `${firstName} ${lastName}`;

console.log(getFullNameWithoutReturnWord("Kate", "Ivanova"));

// 3.2 Можно опустить круглые скобки в аргументе(когда у стрелочной функции только 1 аргумент)
// const showMessage = (message) => {
//   return message;
// };
const showMessage = (message) => message;

console.log(showMessage("Hello, I am arrow fucntion"));

// 3.3 Возврат массива(обьекта)
// - МАССИВ
// Как было до сокращенного синтаксиса
// const getAnimals = () => {
//   return ["Cat", "Dog", "Pig"];
// };

// Как стало после сокращения синтаксиса
const getAnimals = () => ["Cat", "Dog", "Pig"];

console.log(getAnimals());

////////////////////////////////
// ОБЬЕКТ
// как было до сокращения синтаксиса
// const getUser = (firstName, lastName, age) => {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
//     isHuman: true,
//   };
// };
// console.log(getUser("John", "Johnson", 30));

// как стало после сокращения синтаксиса
const getUser = (firstName, lastName, age) => ({
  firstName: firstName,
  lastName: lastName,
  age: age,
  isHuman: true,
});

console.log(getUser("John", "Johnson", 30));

///////////////////////////////////////////////////////////////
// callback функция - это фукнция, которая передается в другую функцию в качкстве арумента и выполняется в теле другой функции

const multiply = (number, sum) => {
  return number * sum(5, 5);
};

const add = (a, b) => {
  return a + b;
};

const result = multiply(100, add);
console.log(result);

/////////////////////////////////////////////
// Задание 1:
// Напишите функцию isEven, которая принимает число и возвращает true,если число четное и false, если нечетное
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(7));

// Задание 2
// Напишите функцию reverseWord, которая принимает в качетсве аргумента строку, и возвращает строку наоборот
// Как разбить слово в массив букв
// let word = "Hello";
// console.log(word.split(""));

// Как соеденить буквы, которые разделены в массиве
// const letters = ["A", "l", "e", "x"];
// console.log(letters.join(""));

function reverseWord(word) {
  let separatedWord = word.split("");

  let reversedSeparatedWord = [];

  for (let index = 0; index < separatedWord.length; index++) {
    reversedSeparatedWord.unshift(separatedWord[index]);
  }

  return reversedSeparatedWord.join("");
}
console.log(reverseWord("Hello"));
