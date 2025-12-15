const APP_ID = "a5175a736cdb818dcdaf93bfe0c58bd0";

// Элементы формы
const WEATHER_INFO_FORM = document.querySelector(".weather_info");
const CITY_INPUT = document.querySelector(".city_input");
const SEARCH_BUTTON = document.querySelector(".search_button");

// Блоки с данными
const WEATHER_TEMP = document.querySelector(".weather_temp");
const CITY_NAME = document.getElementById("cityName");
const TEMPERATURE = document.querySelector(".temperature");
const FEELS_LIKE_TEMP = document.getElementById("feelsLike");

// Три иконки
const WEATHER_ICON_1 = document.getElementById("weatherIcon1");
const WEATHER_ICON_2 = document.getElementById("weatherIcon2");
const WEATHER_ICON_3 = document.getElementById("weatherIcon3");

// Загрузка и ошибки
const LOADING_MESSAGE = document.querySelector(".loading");
const ERROR_CONTAINER = document.querySelector(".error");
const API_ERROR_CODE = document.querySelector(".api_error");
const ERROR_MESSAGE = document.querySelector(".error_message");

// Скрыть все карточки
function hideAll() {
  WEATHER_TEMP.style.display = "none";
  LOADING_MESSAGE.style.display = "none";
  ERROR_CONTAINER.style.display = "none";
}

// Прячем всё при загрузке страницы
hideAll();

// Получение данных о погоде
const fetchWeather = async (cityName) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APP_ID}`;
  // Отправляем http запрос и возвращаем промис
  const response = await fetch(url);
  const data = await response.json();
  // Если !response не ок брось ошибку
  if (!response.ok) {
    // у openweathermap ошибки тоже приходят в json (cod + message)
    throw data;
  }
  // Если ошибок не было, возвращаем объект data из функции.
  return data;
};
// обработка отправки формы через submit
WEATHER_INFO_FORM.addEventListener("submit", async (event) => {
  event.preventDefault();
  // Берём значение из поля ввода (CITY_INPUT.value) убираем пробелы через trim
  const cityName = CITY_INPUT.value.trim();

  if (!cityName) {
    // показываем alert("Please enter a city name!");
    alert("Please enter a city name!");
    return;
  }

  // Подготовка UI: показываем загрузку, скрываем прошлые данные
  hideAll();

  LOADING_MESSAGE.style.display = "flex";
  SEARCH_BUTTON.disabled = true;

  try {
    const data = await fetchWeather(cityName);

    hideAll();
    WEATHER_TEMP.style.display = "flex";
    // В CITY_NAME записываем строку название города код страны
    CITY_NAME.textContent = `${data.name}, ${data.sys.country}`;
    // округляем температуру + символ
    TEMPERATURE.textContent = Math.round(data.main.temp) + "°";
    // Ощущается как
    FEELS_LIKE_TEMP.textContent = Math.round(data.main.feels_like) + "°";
    // первый элемент текущие погодные условия. код иконки
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
    // лучше создавать контейнер иконок динамически
    [WEATHER_ICON_1, WEATHER_ICON_2, WEATHER_ICON_3].forEach((img) => {
      img.src = iconUrl;
      img.alt = data.weather[0].description;
    });
    // Если в try что-то пошло не так (например, throw data в fetchWeather или сеть упала)
  } catch (error) {
    hideAll();
    // Отображает карточку ошибки
    ERROR_CONTAINER.style.display = "flex";

    API_ERROR_CODE.textContent = "API Error";
    // в карточку записываем код error и код ошибки и сообщение ошибки что пришло с сервера или показываем Something went wrong with API data"
    const codePart = error.cod ? `${error.cod}: ` : "";
    const messagePart = error.message || "Something went wrong with API data";
    ERROR_MESSAGE.textContent = codePart + messagePart;
    // блок, который выполняется всегда и когда всё пришло успешно и когда была ошибка
  } finally {
    SEARCH_BUTTON.disabled = false; //снова включаем кнопку поиска
  }
});
