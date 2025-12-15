// console.log(document); // относится только к браузеру!!!

// // ДОСТУП К HTML ЭЛЕМЕНТАМ
// // 1. getElementById()
// const LESSON_TITLE = document.getElementById("lesson-title");
// console.log(LESSON_TITLE);
// LESSON_TITLE.style.color = "green";
// LESSON_TITLE.style.fontSize = "50px";

// // 2. getElementByTagName();
// const DIVS = document.getElementsByTagName("div");
// console.log(DIVS);

// // 3. getElementByClassName();
// const BOXES = document.getElementsByClassName("box");
// console.log(BOXES);

// // 4. querySelector();
// // - по id
// const LESSON_TITLE_BY_QS = document.querySelector("#lesson-title");
// console.log(LESSON_TITLE_BY_QS);
// // - по тегу
// const DIV_BY_QS = document.querySelector("div");
// console.log(DIV_BY_QS);

// // - по классу
// const BOX_BY_QS = document.querySelector(".box");
// console.log(BOX_BY_QS);

// // 5 querySelectorAll();
// // - по id
// const LESSON_TITLE_BY_QS_ALL = document.querySelectorAll("#lesson-title");
// console.log(LESSON_TITLE_BY_QS_ALL);
// // - по тегу
// const DIV_BY_QS_ALL = document.querySelectorAll("div");
// console.log(DIV_BY_QS_ALL);

// // - по классу
// const BOX_BY_QS_ALL = document.querySelectorAll(".box");
// console.log(BOX_BY_QS_ALL);

////////////////////////////////////////////////////////////////////////////////////////
// Добавление контента на HTML
// Представим себе, что данные расположенные ниже приходят к нам с сервера(с БАЗЫ ДАННЫХ)
const fullName = "John Johnson";
const age = 30;
const avatar =
  "https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg";

// ШАГ 1: Получение доступа к HTML элементам, в которые мы хотим добавить контент
const USER_NAME = document.querySelector(".user-name");
const USER_AGE = document.querySelector(".user-age");

// ШАГ 2: Добавление контента к необходимым html элементам
console.log(USER_NAME.textContent);
USER_NAME.textContent = `${USER_NAME.textContent} ${fullName}`;
USER_AGE.textContent = `${USER_AGE.textContent} ${age}`;

///////////////////////////////////////////////////////////////////////////
// ДОБАВЛЕНИЕ И ЗАПОЛНЕНИЕ ЭЛЕМЕНТОВ НА HTML СТРАНИЦЕ
{
  /* <img
    src="https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    alt="User Avatar"
/> */
}

// ШАГ 1: Получаем лоступ к тегу, рядом с которым мы хотим добавитть картинку
const CARD_TITLE = document.querySelector(".card-title");

// ШАГ 2: Создаем элемент, который мы хотим добавить в карточку
const USER_AVATAR = document.createElement("img");

// ШАГ 3: Заполняем тег нужной информацией
USER_AVATAR.className = "user_avatar";
USER_AVATAR.src = avatar;
USER_AVATAR.alt = "User Avatar";

// ШАГ 4: Добавление созданного нами тега в карточку
CARD_TITLE.after(USER_AVATAR);

/////////////////////////////////////////
// Удаление элементов со страницы
// ШАГ 1: Получаем доступ к элементу, который мы хотим удалить
const BOX_1 = document.querySelector("#box_1");

// ШАГ 2: Получаем доступ к кнопке, которая должна удалять этот элемент
const REMOVE_BUTTON = document.querySelector(".remove-button");

// ШАГ 3: Создадим функцию, которая удалит этот элемент
const deleteBox1 = () => {
  BOX_1.remove();
};

// ШАГ 4: Добавление функции deleteBox1 к кнопке REMOVE_BUTTON
REMOVE_BUTTON.addEventListener("click", deleteBox1);
