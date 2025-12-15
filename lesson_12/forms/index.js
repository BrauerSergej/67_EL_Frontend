// 1 ШАГ: получаем доступ к тегу form
const LOGIN_FORM = document.querySelector(".login-form");

// 2 ШАГ: получаем доступ к элементам формы через событие submit(которое происходит при нажатии на кнопку с type="submit")
LOGIN_FORM.addEventListener("submit", (event) => {
  console.log(event);
  // event.preventDefault(); - предотвращает стандартное поведение браузера, например: если происходит событие submit, то страница перезагружаться не будет
  event.preventDefault();

  // Получаем данные из элементов формы
  // -  имя email в event target получилось исходя их того, какое значение мы дали элементу формы в атрибуте name в html коде
  const emailValue = event.target.email.value;
  const passwordValue = event.target.password.value;
  console.log(emailValue);
  console.log(passwordValue);
});
