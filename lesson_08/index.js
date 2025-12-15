// Вывод сообщения в консоль - console.log();
console.log("Hello World!!!");
console.log("Hello World 2");
console.log("Hello World 3", "Hello World 4");

///////////////////////////////////////////////////////////////////////////////////////
// Переменные

// 1. let - изменяемая переменная
// 1.1 обьявление переменной
let message;

// Присвоение переменной строкового значения
message = "Hello, my name is Alex";

// Выведение переменной в консоль
console.log(message);

//  Даем переменной message другое строковое значение
message = "Hello, my name is Michael";
console.log(message);

message = 3;
console.log(message);

// 1.2 Обьявление переменной и тут же присвоение значения
let message2 = "New message";
console.log(message2);

// 2. const - неизменяемая переменная

const firstName = "John";
console.log(firstName);
firstName = "Max";
console.log(firstName);

///////////////////////////////////////////////////////////////////////////////////////////////////
// ТИПЫ ДАННЫХ(8 типов данных)
// 1. string - строковый тип данных
let paragraph = "Hello, my name is John";
console.log(paragraph);
console.log(typeof paragraph);

// Передача переменных в строку
let fullName = "John Johnson";
let greeting = `Hello, ${fullName}`;
console.log(greeting);

// 2. number - числовой тип
let number1 = 23;
let number2 = 23.123;
console.log(number1);
console.log(number2);
console.log(typeof number1);
console.log(typeof number2);

// 3. bigInt - очень большое число, больше чем 9007199254740991
let bigNumber = 9007199254740991123n;
console.log(bigNumber);
console.log(typeof bigNumber);

// 4. boolean - логический тип данных - true или false
let isMarried = true;
isMarried = false;
console.log(isMarried);
console.log(typeof isMarried);

//5. undefiend - неопределенное(неприсвоенное)
let animal;
console.log(animal); // значение undefined
console.log(typeof animal); // тип undefined

// 6. null - пустое значение
let empty = null;
console.log(empty);
console.log(typeof empty);

// 7. object - непримитивный тип данных, в которых мы можем зранить пару ключ/значение

const generatedKey = Symbol();

const person = {
  firstName: "John",
  [generatedKey]: "Max",
  lastName: "Johnson",
  age: 32,
  job: "QA",
};

console.log(person);
console.log(typeof person);

// 8. Symbol - см в презентации
