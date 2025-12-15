const CARD = document.querySelector(".card");
const CARD_CONTENT = document.querySelector(".card_content");
const RANDOMIZER_USER = document.querySelector(".randomizer_user");

const RANDOMIZER_USER_URL = "https://randomuser.me/api/";
let intervalId = null;

CARD.addEventListener("submit", (event) => {
  event.preventDefault();
  if (RANDOMIZER_USER.textContent === "Randomize User") {
    RANDOMIZER_USER.textContent = "Stop Randomazing";
    RANDOMIZER_USER.style.backgroundColor = "red";
    getRandomUser();
    intervalId = setInterval(getRandomUser, 15000);
  } else {
    RANDOMIZER_USER.textContent = "Randomize User";
    RANDOMIZER_USER.style.backgroundColor = "blue";
    clearInterval(intervalId);
    intervalId = null;
  }
});

const getRandomUser = async () => {
  const response = await fetch(RANDOMIZER_USER_URL, {
    method: "GET",
  });
  const result = await response.json();
  const user = result.results[0];
  if (response.ok) {
    CARD_CONTENT.innerHTML = /*html*/ `
<div class="user_image">
    <img src="${user.picture.large}" alt="Avatar" />
</div>
<p class="user_row">
    <span class="user_label">Name: </span>
    <span class="user_value">${user.name.title} ${user.name.first} ${user.name.last}</span>
</p>
<p class=" user_row">
    <span class="user_label">Age: </span>
    <span class="user_value">${user.dob.age}</span>
</p>
<p class="user_row">
    <span class="user_label">Email: </span>
    <span class="user_value">${user.email}</span>
<p class="user_row">
    <span class="user_label">Phone: </span>
    <span class="user_value">${user.phone}</span>
<p class="user_row">
    <span class="user_label">Location: </span>
    <span class="user_value">${user.location.country}, ${user.location.state}, ${user.location.city}, ${user.location.street.name} ${user.location.street.number}, ${user.location.postcode}</span>
</p>
`;
  } else {
    // Останавливаем таймер
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
    // Возвращаем кнопку в исходное состояние
    RANDOMIZER_USER.textContent = "Randomize User";
    RANDOMIZER_USER.style.backgroundColor = "blue";

    // Показываем текст ошибки в карточке
    CARD_CONTENT.textContent = "Sorry! Some Network error. Please try again";
  }
};
