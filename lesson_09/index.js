console.log("Hello, I work from index.js file");

// 1. alert() - выводит на экран выплывающее окно с сообщением, в круглых скобках передаем сообщение
// alert("Hello World");

// 2. prompt() - возвращает в переменную то что ввел в поле пользователь
// - если пользователь ввел что-то в поле и нажал Ok, то в переменную answer возвращается то, что он ввел в качестве string
// - если пользователь ввел что-то в поле(или не ввел) и нажал Cancel, то в переменную answer возвращается null
// - если пользоваетель не ввел ничего и нажал Ok, то в переменную answer возвращается пустая строка ""
let answer = prompt("How old are you?", 40);
// console.log(answer);

// 3. confirm() - способ задания вопроса пользователю с 2 вариантами действий
// - Ok - возвращает в переменную true
// - Cancel - возвращает в переменную false
// let isMarried = confirm("Are you married?");
// console.log(isMarried);

// !!! alert(), prompt() и confirm() - методы Web API(браузера) и не являются частью JS

/////////////////////////////////////////////////////////////////////////////////////////////////
// Operators
// +
// Сложение строк(конкатенация)
let message1 = "Hello ";
let message2 = "World";
console.log(message1 + message2);

// Число + число
console.log(23 + 22); // 45 - number

// Число + строка
console.log(23 + "22"); // "2322" - string

// string + boolean
console.log("some message" + true); // "some messagetrue" - string

// string + undefined
console.log("some message" + undefined); // "some messageundefined" - string

// string + null
console.log("some message" + null); // "some messagenull" - string

// number + undefined
console.log(23 + undefined); // NaN(Not A Number)

// number + null
console.log(23 + null); // 23(потому что null при арифметических операциях воспринимается как 0)

// number + boolean
console.log(23 + true); // 24(потому что true при арифметических операциях воспринимается как 1)
console.log(23 + false); // 23(потому что false при арифметических операциях воспринимается как 0)

// null + undefined
console.log(null + undefined); // NaN

///////////////////////////////////////////////////////////////////////////////////////////
// -
// string - number
console.log("22" - 5); // 17
console.log("message" - 5); // NaN
console.log("50" - true); // 49

////////////////////////////////////////////////////////////////////////////////////////
// *
console.log("22" * null); // 0

///////////////////////////////////////////////////////////////////////////////////////
// деление /
// number / 0
console.log(23 / 0); // Infinity

// string / примитив
console.log("message" / true); // NaN
console.log("message" / "some string"); // NaN
console.log("message" / undefined); // NaN
console.log("message" / null); // NaN
console.log("message" / 3); // NaN
console.log("30" / 3); // 10

// boolean/boolean
console.log(true / false); // Infinity

// Несколько операций сразу
console.log((3 + 2) / 10); // 0.5

// ** - возведение в степень
console.log(2 ** 3); // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Операторы сравнения
// == или ===
// == - сравнивает только по значению
console.log(2 == 2); // true
console.log(2 == "2"); // true

// === - сравнивает по значению и по типу данных(в дальнейшем испоьзуем ===)
console.log(2 === 2); // true
console.log(2 === "2"); // false

// >, <, >=, <=
console.log(3 > 5); // false
console.log(3 >= 3); // true

// != или !==
console.log(1 != "1"); // false(!= - это проверка только по значению)
console.log(1 !== "1"); // true(!== - это проверка по типу и значению)

//////////////////////////////////////////////////////////////////////////////////////////////
// Логические операторы && - И, || - ИЛИ, ! -НЕ
// && - если хотя бы 1 из утверждений false, тогда результат будет false
console.log(true && false); // false
console.log(1 === "1" && 50 > 40); // false
console.log(100 === 100 && "Hello" === "hello"); // false
console.log(30 > 0 && 2 + 2 === 4 && "message" === "message"); // true

// || - если есть хотя бы 1 true, то будет true
console.log(false || true); // true
console.log(3 == "3" || 3 > 10); // true
console.log((100 === 100 && 3 === "3") || true); // true

// ! - обратное буленовское выражение
console.log(!false); // true
console.log(!(1 === true)); // true

////////////////////////////////////////////////////////////////////////////////
// Условный оператор if
let person = "Elena";

if (person === "Johny") {
  console.log(`Доступ ${person} разрешен`);
} else if (person === "Jack") {
  console.log(`Доступ ${person} разрешен`);
} else if (person === "Max") {
  console.log(`Доступ ${person} разрешен`);
} else if (person === "Alex") {
  console.log(`Доступ ${person} разрешен`);
} else if (person === "Ivan") {
  console.log(`Доступ ${person} разрешен`);
} else if (person === "Kate") {
  console.log(`Доступ ${person} разрешен`);
} else {
  console.log(`Доступ ${person} запрещен`);
}

// тернарный оператор
let number = 10;
// if (number === 100) {
//   console.log(`Вы угадали число 100`);
// } else {
//   console.log("Вы не угадали число");
// }

number === 100
  ? console.log("Вы угадали число 100")
  : console.log("Вы не угадали число");

///////////////////////////////////////////////////
// switch ... case...
// if (person === "Johny") {
//   console.log(`Доступ ${person} разрешен`);
// } else if (person === "Jack") {
//   console.log(`Доступ ${person} разрешен`);
// } else if (person === "Max") {
//   console.log(`Доступ ${person} разрешен`);
// } else if (person === "Alex") {
//   console.log(`Доступ ${person} разрешен`);
// } else if (person === "Ivan") {
//   console.log(`Доступ ${person} разрешен`);
// } else if (person === "Kate") {
//   console.log(`Доступ ${person} разрешен`);
// } else {
//   console.log(`Доступ ${person} запрещен`);
// }

let user = "Elena";

switch (user) {
  case "Johny": {
    console.log(`Доступ ${user} разрешен`);
    break;
  }
  case "Jack": {
    console.log(`Доступ ${user} разрешен`);
    break;
  }
  case "Max": {
    console.log(`Доступ ${user} разрешен`);
    break;
  }
  case "Alex": {
    console.log(`Доступ ${user} разрешен`);
    break;
  }
  case "Ivan": {
    console.log(`Доступ ${user} разрешен`);
    break;
  }
  case "Kate": {
    console.log(`Доступ ${user} разрешен`);
    break;
  }
  default: {
    console.log(`Доступ ${user} запрещен`);
    break;
  }
}

//////////////////////////////////////////////////////////
// Преобразование типов
// - Boolean();
console.log(Boolean(0));
// - Number();
console.log(Number(true));
// - String();
console.log(String(500));

////////////////////////////////////////////////////////
// ++ , --
let a = 0;
// console.log(a++); // 0
// console.log(a); // 1
console.log(++a); // 1
console.log(a); // 1

// Пример:
let index = 2;
console.log(index++); // 2
console.log(index); // 3
console.log(++index); // 4
let index2 = index++;
console.log(index2); // 4
console.log(index); // 5
console.log(index2 + ++index); // 4 + 6 = 10
