// Функции

// Функции бывают 3 видов:
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function(стрелочная функция)

// Функции бывают 2 типов:
// - функция, которая что-то выполняет и ничего не возвращает
// - функция, которая что-то возвращает и может что-то выполнять, но не обязательно
// Функции могут возвращать любой тип данных

// 1. Function Declaration

// sayHelloWorld - функция, которая что-то выполняет и ничего не возвращает
sayHelloWorld(); // Выдаст в консоль Hello World, т.к Function Declaration видна во всем файле
function sayHelloWorld() {
  // все что находится внутри фигурных скобок нахывает телом функции
  console.log("Hello World");
}

sayHelloWorld(); // вызов функции sayHelloWorld

let resultOfSayHelloWorld = sayHelloWorld();
console.log(resultOfSayHelloWorld); // при вызове функции  корорая ничего не возвращает(т.е в функции нету return) и попытке передать результат ее выполнения переменной, вы получите undefined
////////////////////////////////////////////////////////////////////////////////////////////////////
// add - функция, которая что-то возвращает и может что-то выполнять, но не обязательно
//1.1 - передача аргументов в функцию
// - аргументов можно передавать сколько угодно
// - если при вызове функции, не пердать ей аргументов, то аргументы number1 и number2 будут = undefined
function add(number1, number2) {
  console.log(number1, number2);
  return number1 + number2;
}

let addResult = add(125, 3);
console.log(addResult);
console.log(add(5, 10));

//////////////////////////////////////////////////////////////////////////////////////////////////
// Практика: написать функцию, котрая будет принимать строку возвращать строку наоборот
function reverseString(word = "Hello") {
  const splitedWord = word.split("");
  const reversedValue = [];
  for (let index = 0; index < splitedWord.length; index++) {
    reversedValue.unshift(splitedWord[index]);
  }

  return reversedValue.join(""); // join() - метод массивов, который соедииняет элементы в строку
}

let reversedString = reverseString("Test");
console.log(reversedString);

///////////////////////////////////////////////////////////////////////////////////////
// 2. Functiion Expression
sayHi("Brat"); //  Ошибка, нельзя использовать Function Expression до ее инициализации
const sayHi = function (firstName) {
  console.log(`Hello, ${firstName}`);
};

sayHi("Alex");
sayHi("Kate");

////////////////////////////////////////////////////////////////////////////
// 3. Arrow function
const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

let fullName = getFullName("Brat", "Pitt");
console.log(fullName);

// 3.1 Сокращение слова return
// Если у нас в теле функции нет никаких операций, кроме return, то можно опустить фигурные скобки и слово return(но функция все равно будет возвращать то что стоит после =>)
const getFullNameWithoutReturnWord = (firstName, lastName) =>
  `${firstName} ${lastName}`;

//3.2 Можно опустить круглые скобки, если в функции только 1 аргумент
// const showMessage = message => {
//   console.log(message);
// };
const showMessage = (message) => {
  console.log(message);
};

// 3.3 Возврат обьекта
// const getUser = () => {
//   const user = {
//     fullName: "John Johnson",
//     age: 30,
//     isMarried: true,
//   };

//   return user;
// };

const getUser = () => ({
  fullName: "John Johnson",
  age: 30,
  isMarried: true,
});

console.log(getUser());

//////////////////////////////////////////////////////////
// Передача функций в качестве аргумента. Функции переданные в качестве аргумента, и вызванные в другой функции называются callback
const sum = (a, b, c) => a + b + c;
console.log(typeof sum); // функции по типу данных являются object. НО typeof sum выдаст вам function

const square = (sumFunction, row) => {
  const result = sumFunction(3, 5, 6);

  console.log(Math.pow(sumFunction(3, 5, 6), row));
  return result ** row;
};

console.log(square(sum, 3));

// Написать функцию, которая будет принимать строку возвращать строку наоборот
// function reverseWord(word) {
//   let separatedWord = word.split("");
//   let reversedSeparatedWord = [];

//   for (let index = 0; index < separatedWord.length; index++) {
//     reversedSeparatedWord.unshift(separatedWord[index]);
//   }
//   return reversedSeparatedWord.join("");
// }
// console.log(reverseWord("Sergej"));

//
function reverseWord(word) {
  let splitedWord = word.split("");
  let reversSplitedWord = [];
  for (let index = 0; index < splitedWord.length; index++) {
    reversSplitedWord.unshift(splitedWord[index]);
  }
  // склеить с join - // join() - метод массивов, который соедииняет элементы в строку
  return reversSplitedWord.join("");
  // console.log(splitedWord);
}
console.log(reverseWord("Sergej"));

