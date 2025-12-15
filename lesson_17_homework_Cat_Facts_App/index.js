// Получаем доступ к элементам, которые необходимы для работы
// Сама карточка/форма
const FORM = document.querySelector(".card");
// FACTS - список, куда мы кладём факты
const FACTS = document.querySelector(".facts");
// сама кнопка - дизейблить кнопку потом
const GET_CAT_FACT_BUTTON = document.querySelector(".btn_get_fact");

// Создаем константу, в которой разметим URL на котороый будем отправлять запрос
const CAT_FACT_URL = "https://catfact.ninja/fact";

// слушаем событие отправки формы - Срабатывает, когда пользователь нажал кнопку type="submit" или Enter в поле
// асинхронная стрелочная функция async (event) => { ... }
// async говорит: внутри этой функции мы будем использовать await для работы с промисами (например, с fetch).
FORM.addEventListener("submit", async (event) => {
  // Останавливаем стандартное поведение формы
  event.preventDefault();
  GET_CAT_FACT_BUTTON.disabled = true;
  // Отправляем запрос на сервер (fetch + await)
  // fetch(CAT_FACT_URL) – отправляем HTTP-запрос по указанному адресу - GET запрос по умолчанию.
  // fetch возвращает Promise (обещание, которое завершится позже).
  // await говорит: «Подожди, пока промис выполнится, и положи результат в переменную response».
  // response – это объект Response, в котором есть:
  // response.ok – true если ответ успешный (статус 200–299),
  // response.status – номер статуса (200, 404, 500 и т.д.),
  // другие поля (url, headers и т.д.),
  // и методы, например response.json().
  const response = await fetch(CAT_FACT_URL);

  // json() - метод, который возвращает Promise и преобразует json в js обькт, чтобы достать данные из тела ответа мы используем await
  // В итоге в result в нашем случае у нас будет лежать ответ от сервера в виде js обьекта
  const result = await response.json();
  if (response.ok) {
    // Тут мы пишем логику по успешшному ответу, т.е когда промис имеет статус fullfiled
    // 1. Создаём элементы - li div p button
    const FACT_BOX = document.createElement("li");
    const FACT_CONTROL = document.createElement("div");
    const FACT = document.createElement("p");
    const DELETE_FACT_BUTTON = document.createElement("button");

    // 2. Наполняем элементы контентом, стилями и атрубутами
    // добавляем в тэг p текст который пришёл с сервера
    FACT.textContent = result.fact;
    // добавляем в кнопку delete надпись Delete cat fact
    DELETE_FACT_BUTTON.textContent = "Delete cat fact";
    // добавляем в div элемент - класс fact_container
    FACT_CONTROL.className = "fact_container";
    // добавляем в delete button класс имя delete_button
    DELETE_FACT_BUTTON.className = "delete_button";

    // 3. добавляем событие для кнопки с помощью click
    // слушаем событие кнопки delete
    DELETE_FACT_BUTTON.addEventListener("click", () => {
      // при вызове удаляется li из DOM
      FACT_BOX.remove();
    });

    // 4. Отображение в DOM
    FACT_CONTROL.append(FACT);
    FACT_CONTROL.append(DELETE_FACT_BUTTON);
    FACT_BOX.append(FACT_CONTROL);
    FACTS.append(FACT_BOX);

    // 5. Раздизейбливаем кнопку
    GET_CAT_FACT_BUTTON.disabled = false;
  } else {
    if (result.code === 429) {
      alert(result.message);
    } else {
      alert("Some Network Error!!! Please, try to get cat fact again!");
    }

    GET_CAT_FACT_BUTTON.disabled = false;
  }
});
