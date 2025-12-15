// 1 ШАГ: получаем доступ к тегу form
const WEIGHT_FORM = document.querySelector(".weight_calculator_form");
const RESULT = document.querySelector(".result");

// 2 ШАГ: получаем доступ с помощью слушателя событий (addEventListener) к элементам формы через событие submit(которое происходит при нажатии на кнопку с type="submit")
WEIGHT_FORM.addEventListener("submit", (event) => {
  console.log(event);
  // убираем перезагрузку формы по умолчанию
  event.preventDefault();

  const PREVIOUS_RESULT = document.querySelector(".result");
  if (PREVIOUS_RESULT !== null) {
    PREVIOUS_RESULT.remove();
  }

  // Получаем данные из элементов формы
  const height = event.target.height.value;
  const gender = event.target.gender.value;
  const normalHeight = Number(height);
  console.log(height);
  console.log(gender);

  let idealWeight;

  if (gender === "male") {
    idealWeight = normalHeight - (100 + (normalHeight - 100) / 20);
  } else if (gender === "female") {
    idealWeight = normalHeight - (100 + (normalHeight - 100) / 10);
  } else {
    idealWeight = "Calculation Error";
  }

  RESULT.textContent = `Your ideal weight: ${idealWeight} kg`;

  const RESULT_ELEMENT = document.createElement("div");
  RESULT_ELEMENT.className = "result";
  RESULT_ELEMENT.textContent = `Your ideal weight: ${idealWeight} кг`;
  WEIGHT_FORM.append(RESULT_ELEMENT);
});
