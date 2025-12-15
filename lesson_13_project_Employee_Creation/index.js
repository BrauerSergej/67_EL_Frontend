const USER_FORM = document.querySelector(".user_form");
const card = document.querySelector(".output_card");



USER_FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  const outputName = document.querySelector("#user_name").value.trim();
  const outputSurname = document.querySelector("#user_surname").value.trim();
  const outputAge = document.querySelector("#user_age").value.trim();
  const outputJobPosition = document
    .querySelector("#user_job")
    .value.trim();

  if (!outputName || !outputSurname || !outputAge || !outputJobPosition) {
    card.className = "output_card card";
    alert("Fill in all the required fields");
    return;
  }

  document.querySelector("#result_name").textContent = outputName;
  document.querySelector("#result_surname").textContent = outputSurname;
  document.querySelector("#result_age").textContent = outputAge;
  document.querySelector("#result_job_position").textContent = outputJobPosition;

  card.className = "output_card";
});
