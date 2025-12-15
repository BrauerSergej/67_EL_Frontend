// Задание 2
// Создание и обработка промисов
// Создайте функцию showNumbers(seconds), которая принимает в качестве аргумента число секунд и возвращает промис. Промис должен выполняться через указанное количество секунд и возвращать сообщение "Прошло {seconds} секунд(ы)". Используйте setTimeout внутри промиса для создания задержки выполнения. Если колличестов секунд больше 10, то промис должен возвращать ошибку "Ошибка: максимальное количество секунд = 10".Создайте несколько экземпляров функции showNumbers с разными значениями секунд и выведите результат выполнения каждого промиса.
const showNumbers = (seconds) => {
  let ms = seconds * 1000;
  const promise = new Promise((resolve, reject) => {
    if (seconds > 10) {
      setTimeout(() => {
        reject("Ошибка: максимальное количество секунд = 10");
      }, ms);
    } else {
      setTimeout(() => {
        resolve(`Прошло ${seconds} секунд(ы)`);
      }, ms);
    }
  });
  return promise;
};

const wait = (seconds) => {
  showNumbers(seconds)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

wait(2);
// wait(5);
// wait(10);
// wait(12);
