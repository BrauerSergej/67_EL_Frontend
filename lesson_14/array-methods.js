// Array methods

// 1. reverse()
// - меняет элементы массива меcтами(наоборот). Например: последний элемент становится первым, а первый последним
// - меняет исходный массив
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);

////////////////////////////////////////////////////////////
// 2. map()
// - не меняет исходный массив
// - возвращает новый массив в переменную
// - всегда: колличество элементов в новом массиве будет всегда столько же сколько и в старом
// - если ф-я callback ничего не вернет, то значения в новом массиве будут undefined

const users = ["John", "Alex", "Mary", "Peter", "Jack"];

const user2 = users.map((userName) => {
  // console.log(userName);
  return `Admin - ${userName}`;
});

console.log(user2);

////////////////////////////////////////////////
// 3. forEach()
// - не меняет исходный массив
// - возвращает undefined
// - используется, чтобы сделать какие-нибудь операции с элентами массива, не обязательно со всеми

const number3 = [300, 400, 100, 700];
let sum = 0;

number3.forEach((number) => {
  // console.log(number);
  sum = number + sum;
});
console.log(a);

console.log(sum);
///////////////////////////////////////////////////////////
// 4. filter()
// - возвращает новый массив, но отфильтрованный
// - если функция callback возвращает true, то элемент возвращается в новый массив, если нет, то не возвращается
// - не меняет исходный массив

const employees = [
  { id: 1, fullName: "John Doe", age: 30, job: "QA" },
  { id: 2, fullName: "Jane Smith", age: 25, job: "Frontend" },
  { id: 3, fullName: "Alex Johnson", age: 35, job: "Bakend" },
  { id: 4, fullName: "Emily Brown", age: 28, job: "UI/UX" },
  { id: 5, fullName: "Michael Wilson", age: 32, job: "QA" },
  { id: 6, fullName: "Sarah Davis", age: 27, job: "Frontend" },
  { id: 7, fullName: "Daniel Martinez", age: 33, job: "Bakend" },
  { id: 8, fullName: "Olivia Anderson", age: 29, job: "UI/UX" },
  { id: 9, fullName: "William Thomas", age: 31, job: "QA" },
];

const qaEmployees = employees.filter((employee) => {
  // console.log(employee.job === "QA");
  return employee.job === "QA";
});

console.log(qaEmployees);

// возраст < 30

const employeesLessThan30 = employees.filter((employee) => {
  return employee.age < 30;
});

console.log(employeesLessThan30);
