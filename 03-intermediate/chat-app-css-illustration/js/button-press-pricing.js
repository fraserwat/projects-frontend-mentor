const selectPricingPlan = function (btn) {
  // Check if any of the buttons are currently selected
  console.log("start");
  currentActive = [...document.querySelectorAll(".message__click.active")].map(
    (btn) => {
      return btn.id;
    }
  );
  console.log(currentActive);
  console.log(btn.classList);

  // If other button is selected unselect it and select this one
  if (!currentActive.includes(btn.id) && currentActive.length > 0) {
    let classForRemoval = document.getElementById(currentActive[0]);
    classForRemoval.classList.remove("active");
  }
  // If this button isn't selected, select it
  if (!currentActive.includes(btn.id)) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
  console.log(btn.classList);
  console.log("end");
};

// Get both pricing plant buttons and add an event listener to them
document.querySelectorAll(".message__click").forEach((btn) => {
  btn.addEventListener("click", function () {
    selectPricingPlan(btn);
  });
});
