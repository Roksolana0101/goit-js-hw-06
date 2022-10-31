const inputform = document.querySelector(".login-form");

inputform .addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Потрібно заповнити всі поля форми!");
  }
  const formElements = { mail: email.value, password: password.value };

  console.log(formElements);

  event.currentTarget.reset();
}
