// Objects

// 1. Создание простого обьекта
// const person = {};
// console.log(person);
// console.log(typeof person);

const person = {
  firstName: "John",
  "last Name": "Johnson",
  isMarried: false,
  age: 25,
  dog: {
    dogName: "Spyke",
    color: "black",
  },
  sayHi: (otherName) => {
    console.log(`Name of the John Johnson friend is ${otherName}`);
  },
};

// console.log(person);

// 2. Получение значений из обьектов
// 2.1 через точку
// console.log(person.firstName);
// console.log(person.dog.dogName);
// person.sayHi("Max"); //  вызов метода sayHi

// 2.2 через квадратные скобки(если имя ключа у нас в одно или несколько слов)
// console.log(person["last Name"]);
// console.log(person["age"]);

// 3. Удаление и перезависывания св-в обьекта
// - перезаписывание
person.age = 26;
person.isMarried = true;
// console.log(person);

// - удаление
delete person.dog;
// console.log(person);

//4. Длина обьекта
const keysArray = Object.keys(person);
// console.log(keysArray.length); // 5

// 5. Получить все значения свойств обьекта в качестве массива значений
const personValuesArray = Object.values(person);
// console.log(personValuesArray);

// 6. Проверка на наличие св-ва в обьекте
// console.log("age" in person); // true
// console.log("qwe" in person); // false

// 7. Destructuring - деструктуризация

const actor = {
  firstName: "Johny",
  lastName: "Depp",
  age: 50,
  isMarried: false,
  dog: {
    dogName: "Spyke",
    color: "black",
  },
};

// const fName = actor.firstName;
// const lName = actor.lastName;
// const age = actor.age;
// const isMarried = actor.isMarried;
// console.log(fName);
// console.log(lName);
// console.log(age);
// console.log(isMarried);

// создать динамически переменные из всех ключей обьекта
// const { age, firstName, lastName, isMarried } = actor;
// console.log(age);
// console.log(firstName);
// console.log(lastName);
// console.log(isMarried);
// console.log(actor);

//
// const { firstName, lastName, ...restActorInfo } = actor;
// console.log(firstName);
// console.log(lastName);
// console.log(restActorInfo);

// 8. Spread operator

// const actor2 = actor;
// console.log(actor);
// console.log(actor2);
// actor.age = 51;
// console.log(actor);
// console.log(actor2);

const actor2 = {
  ...actor,
  dog: { ...actor.dog },
  firstName: "Brat",
  lastName: "Pitt",
}; // spread operator - копирование обьекта
console.log(actor);
console.log(actor2);
actor.dog.color = "white";
console.log(actor);
console.log(actor2);
