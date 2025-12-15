// Задание 1
// Создать страницу, на которой у вас будет квадрат с background-color: white Под квадратом должны находиться 2 кнопки:
// 1. "Randomize square color" - при клике на нее каждые 3 секунды у вас должен меняться цвет квадрата на рандомный. Цвет должен меняться на случайный из массива ниже:
// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548",
//   "rgb(42, 34, 82)",
//   "rgb(61, 30, 214)",
//   "blueviolet",
//   "rgb(214, 30, 30)",
// ];
// Copy
// Для выборки случайного цвета используйте функцию Math.random(), ссылка на принцип ее работы
// 2. "Stop Randomize square color" - при клике на нее, цвет квадрата перестает меняться
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
  "rgb(42, 34, 82)",
  "rgb(61, 30, 214)",
  "blueviolet",
  "rgb(214, 30, 30)",
];

const square = document.querySelector("#square");
const start = document.querySelector("#startBtn");
const stop = document.querySelector("#stopBtn");
let timerId = null;

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
// const getRandomColor = () => {
//   return Math.floor(Math.random() * colors.length);
// };

start.addEventListener("click", () => {
  if (timerId) return;
  timerId = setInterval(() => {
    square.style.backgroundColor = getRandomColor();
  }, 3000);
});

stop.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
});
