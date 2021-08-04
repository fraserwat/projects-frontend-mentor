shareButton = () => {
  let popup = document.getElementById("share-popup");
  if (popup.classList.contains("hide")) {
    popup.classList.remove("hide");
  } else {
    popup.classList.add("hide");
  }
};
