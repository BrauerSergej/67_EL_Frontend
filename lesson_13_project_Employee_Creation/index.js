const USER_FORM = document.querySelector(".user_form");
const OUTPUT_CARD = document.querySelector(".output_card");

const RESULT_NAME = document.querySelector("#result_name");
const RESULT_SURNAME = document.querySelector("#result_surname");
const RESULT_AGE = document.querySelector("#result_age");
const RESULT_JOB_POSITION = document.querySelector("#result_job_position");

OUTPUT_CARD.hidden = true;

USER_FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  // Берём значение из поля input с name="name" (ввод пользователя)
  const nameValue = event.target.name.value.trim();
  // Берём значение из поля input - name="surname" (ввод пользователя)
  const surnameValue = event.target.surname.value.trim();
  // Берём значение из поля input - name="age" (ввод пользователя)
  const ageValue = event.target.age.value.trim();
  // Берём значение из поля input - name="job" (ввод пользователя)
  const jobValue = event.target.job.value.trim();

  // Если хотя бы одно поле пустое — прячем карточку, показываем предупреждение и выходим.
  if (!nameValue || !surnameValue || !ageValue || !jobValue) {
    OUTPUT_CARD.hidden = true;
    alert("Fill in all the required fields");
    return;
  }
  // Output
  // Записываем текст в RESULT_NAME - nameValue
  RESULT_NAME.textContent = nameValue;
  // Записываем текст в RESULT_SURNAME - surnameValue
  RESULT_SURNAME.textContent = surnameValue;
  // Записываем текст в RESULT_AGE - ageValue
  RESULT_AGE.textContent = ageValue;
  // Записываем текст в RESULT_JOB_POSITION - jobValue
  RESULT_JOB_POSITION.textContent = jobValue;

  OUTPUT_CARD.hidden = false;
});
