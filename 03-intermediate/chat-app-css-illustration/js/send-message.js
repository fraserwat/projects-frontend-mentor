function sendNewMessage(event) {
  event.preventDefault();

  const message = document.getElementsByTagName("input")[0].value;

  if (message.length >= 1) {
    // post message into chat
    postMessage(message);
    // delete from message box
    resetMessageInput();
  }
}

function postMessage(message) {
  // Get elements for the phone screen's chat screen and empty div we're going to use for new message
  const chatWindow = document.getElementsByClassName(
    "mobile__chat-messages"
  )[0];
  const newMessageDiv = document.createElement("div");

  // Add class and message to empty div
  newMessageDiv.classList.add("message__you");
  newMessageDiv.innerHTML = `<p>${message}</p>`;

  // Add message div to screen
  chatWindow.appendChild(newMessageDiv);
}

function resetMessageInput() {
  const messageBox = document.getElementsByTagName("input")[0];
  messageBox.value = null;
}
