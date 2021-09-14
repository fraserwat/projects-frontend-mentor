const radioList = document.querySelectorAll('input[type="radio"]');

[...radioList].forEach((element) => {
  element.addEventListener("change", changeActiveTestimonial);
});

function changeActiveTestimonial(radioButton) {
  const digits = new RegExp("\\d"),
    listId = radioButton.target.id.match(digits)[0] - 1;
  document.querySelector(".card.active").classList.remove("active");
  document.querySelectorAll(".card")[listId].classList.add("active");
}
