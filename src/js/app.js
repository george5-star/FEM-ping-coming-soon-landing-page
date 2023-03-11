const emailInput = document.querySelector(".email");
const submitBtn = document.querySelector(".btn");

let errorMessage = document.querySelector(".error");

const regex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (!emailInput.value) {
    errorMessage.textContent = `Whoops! It looks like you forgot to add your email`;
    errorMessage.classList.add("toggle");
  } else if (!regex.test(emailInput.value)) {
    errorMessage.textContent = "Please provide a valid email address";
    errorMessage.classList.add("toggle");
    emailInput.classList.add("error-indicator");
  } else {
    errorMessage.classList.remove("toggle");
    emailInput.classList.remove("error-indicator");
  }
});
