function regexMatch(input) {
  const regexString = new RegExp("[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}", "g");
  return regexString.test(input);
}

function emailRegex(e) {
  e.preventDefault();

  let targetList = document.querySelector(
    `.${e.target.classList.value} .form__fields`
  );
  let currentEmail = document.querySelector(
    `.${targetList.classList[0]} input[type="email"]`
  );
  currentEmail = currentEmail ? currentEmail.value.toUpperCase() : false;
  if (regexMatch(currentEmail) === false) {
    targetList.classList.add("active");
  } else {
    targetList.classList.remove("active");
  }
}
