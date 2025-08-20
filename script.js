const socket = io();

const form = document.getElementById("chat-form");
const msgInput = document.getElementById("msg");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (msgInput.value.trim() !== "") {
        socket.emit("chatMessage", msgInput.value);
        msgInput.value = "";
    }
});

socket.on("chatMessage", (msg) => {
    const div = document.createElement("div");
    div.textContent = msg;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
});
