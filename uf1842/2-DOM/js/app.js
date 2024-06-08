/**
 * ¡Buena suerte! ¡Pasa el mensaje!
 */

document.addEventListener("DOMContentLoaded", function () {
    const btnSend = document.getElementById("btn-send");
    const inputMessage = document.getElementById("message");
    const lastMessage = document.getElementById("last-message");
    const feedback = document.querySelector(".feedback");

    btnSend.addEventListener("click", function () {
        const message = inputMessage.value.trim();

        if (message === "") {
            feedback.classList.add("show");
            setTimeout(function () {
                feedback.classList.remove("show");
            }, 2000);
        } else {
            lastMessage.textContent = message;
            inputMessage.value = "";
        }
    });
});
