const slides = document.querySelectorAll(".slides__slide");
let currentSlideNumber = 0;

const slideButtonsPrevious = document.querySelectorAll(
    ".slides__slide picture > button:first-of-type"
  ),
  slideButtonsNext = document.querySelectorAll(
    ".slides__slide picture > button:last-of-type"
  );

function nextSlide() {
  currentSlideNumber =
    currentSlideNumber + 1 >= slides.length ? 0 : currentSlideNumber + 1;
  updateSlideDOM();
}
function prevSlide() {
  currentSlideNumber = currentSlideNumber - 1 < 0 ? 2 : currentSlideNumber - 1;
  updateSlideDOM();
}

function updateSlideDOM() {
  slides.forEach((x) => {
    x.classList.remove("active");
  });
  slides[currentSlideNumber].classList.add("active");
}
