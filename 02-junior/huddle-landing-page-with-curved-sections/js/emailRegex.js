const formFields = document.querySelector(".form__fields");
const regexString = new RegExp("[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{1,}", "g");

function regexMatch(input) {
  return regexString.test(input);
}

function emailRegex(e) {
  e.preventDefault();
  let currentEmail = document.getElementById("email").value.toUpperCase();
  console.log(currentEmail);
  if (!regexMatch(currentEmail)) {
    formFields.classList.add("active");
  } else {
    formFields.classList.remove("active");
  }
}
