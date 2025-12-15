// На сервере хранится объект пользователя
const userData = {
  firsName: "John",
  lastName: "Johnson",
  age: 30,
  job: "Frontend developer",
};
// задержка
let delay = 6;
 
// Создаём промис
const promise = new Promise((resolve, reject) => {
  if (delay > 5) {
    setTimeout(() => {
      reject("Sorry, we have some server error. Please try again!");
    }, delay * 1000);
  } else {
    setTimeout(() => {
      resolve(userData);
    }, delay * 1000);
  }
});

console.log(promise);

// Обработка результата промиса (потребляющий код)
promise
  .then((result) => {
    // Пишем логику по обработке успешно пришедших данных с сервера. В этом
    // примере данные пользователя
    console.log(
      "Status fulefieled, промис выполнился успешно. Ваши данные:",
      result
    );
  })
  .catch((error) => {
    // Пишем логику по обработке успешно ошибки с сервера. В этом
    // примере пришёл текст с ошибкой
    console.log("Status rejected, промис выполнился с ошибкой. Ошибка:", error);
  })
  .finally(() => {
    // Действие, которое должно выполниться в любом случае (либо после
    // блока then, либо после блока catch)
    console.log("Выполнится в любом случае");
  });
