// Objects

// 1. Создание простого объекта

// const person = {}; // создание пустого объекта
// console.log(person);
const person = {
  firstName: "John",
  "last Name": "Johnson",
  age: 25,
  isMarried: true,
  sayHi: () => {
    console.log("Hello, I am John Johnson");
  },
  dog: {
    dogName: "Spyke",
    color: "black",
  },
};

// 2. Получение значений из объекта
// 2.1 Через точку(если имя ключа в одно слово)
console.log(person.firstName); // "John"
console.log(person.dog.dogName); // "Spyke"
// 2.2 - через квадратные скобки(если имя ключа в одно или несколько слов) 
console.log(person["last Name"]); // Johnson

// 3. Удаление свойств
delete person.isMarried;
console.log(person);

// 4. Длина объекта - Object.keys()
// Object.keys(someObj) - принимает в качестве аргумента объект и возвращает массив его ключей
const personKeys = Object.keys(person);
console.log(Object.keys.length); // -> 1 (количество параметров у функции Object.keys)
console.log(personKeys); // -> ["name", "age", "city"] (например)
console.log(personKeys.length); // -> 3 (количество ключей у объекта person)
console.log( Object.keys(person).length);

// 5. Получить все значения св-в объекта в качестве массива значений
console.log(Object.values(person));

