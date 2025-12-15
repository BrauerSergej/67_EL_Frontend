// 1. setTimeout - он позволяет вызвать переданную функцию через
// определённый промежуток времение один раз
// setTimeout(callback, ms)
//  1 аргумент - функция callback, которая выполняется через переданное
// в качестве 2-го аргумента количество ms
//  2 аргумент - количество ms
// setTimeout возвращает timerId
console.log(1);
const getTwo = () => {
  console.log(2);
};
const timerId = setTimeout(getTwo, 4000);
console.log(3);
// console.log(timerId);
setTimeout(() => {
  console.log("Функция getTwo отменена");
  clearTimeout(timerId);
}, 3000);

// ///////////////////////////////////////////
// 2. setInterval - выполняет переданную функция бесконечно с временным
// интервалом, который мы указываем вторым аргументом
// setInterval(callback, ms)
//  1 аргумент - функция callback, которая выполняется через переданное
// количество ms (во второй аргумент) неограниченное количество раз, если его не остановить
//  2 аргументв - количество ms (интервал, с которым будет вызываться функция callback)
// setInterval возвращает intervalId
const intervalId = setInterval(() => {
  console.log("Вызов функции каждые 2 секунды");
}, 2000);

setTimeout(() => {
  clearInterval(intervalId);
}, 10000);

// Задача: написать функцию, чтобы она увеличивала счётчик до 10 каждую секунду
// и выводила каждый новый результат в консоль
const countToTen = () => {
  let counter = 0;
  const intervalId = setInterval(() => {
    // counter += 1;
    counter++;
    console.log(counter);
    if (counter === 10) {
      clearInterval(intervalId);
    }
  }, 1000);
  // setTimeout(() => {
  //   clearInterval(intervalId);
  // }, 10500);
};
countToTen();
