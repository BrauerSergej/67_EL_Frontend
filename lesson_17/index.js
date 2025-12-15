// Получаем доступ к элементам, которые необходимы для работы
const JOKES_FORM = document.querySelector(".joke-card");
const JOKES = document.querySelector(".jokes");

// Создаем константу, в которой разметим URL на котороый будем отправлять запрос
const RANDOM_JOKE_URL = "https://official-joke-api.appspot.com/random_joke";

JOKES_FORM.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Пример POST запроса
  //   fetch(RANDOM_JOKE_URL, {
  //     method: "POST",
  //     body: {
  //       email: "john@test.com",
  //       password: "qwerty007",
  //     },
  //   });

  // Пример GET запроса, 2 аргумент можно опустить, т.к fetch по умлочанию и так вызывает метод GET
  // fetch(RANDOM_JOKE_URL, {
  //     method: "GET",
  //   });

  // Обработка промисов с помощью async/await
  // метод fetch возвращает Promise
  // Когда мы используем await мы получаем обьект Response - дает нам общую информацию об ответе, такую как: url, ok, status и т.д А также дает нам метод json() для получения данных из body
  const response = await fetch(RANDOM_JOKE_URL);

  // json() - метод, который возвращает Promise и преобразует json в js обькт, чтобы достать данные из тела ответа мы используем await
  // В итоге в result в нашем случае у нас будет лежать ответ от сервера в виде js обьекта
  const result = await response.json();

  if (response.ok === true) {
    // Тут мы пишем логику по успешшному ответу, т.е когда промис имеет статус fullfiled
    console.log(result);
    JOKES.textContent = `${result.setup} ${result.punchline}`;
  } else {
    // Тут мы пишем логику по обработке ошибок, промис имеет статус rejected
    alert("Some Network Error!!!");
  }

  // Пример обработки промиса через then catch
  //   fetch(RANDOM_JOKE_URL).then((response) => {
  //     if (response.ok) {
  //       response.json().then((result) => {
  //         JOKES.textContent = `${result.setup} ${result.punchline}`;
  //       });
  //     } else {
  //       response.json().then((error) => {
  //         alert("Some Network Error!!!");
  //       });
  //     }
  //   });
});
