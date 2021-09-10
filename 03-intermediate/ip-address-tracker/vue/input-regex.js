function inputCheck(e) {
  const ipRegEx = new RegExp(
      "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
    ),
    movementKeys = ["Enter", "ArrowLeft", "ArrowRight", "Backspace"];
  if (ipRegEx.test(e.key) || movementKeys.includes(e.key)) {
    return true;
  } else {
    return false;
  }
}
