const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name.length < 2) {
        successMessage.textContent = "Please enter your name.";
        return;
    }

    if (!email.includes("@")) {
        successMessage.textContent = "Please enter a valid email address.";
        return;
    }

    if (message.length < 10) {
        successMessage.textContent = "Please enter a message with at least 10 characters.";
        return;
    }

    successMessage.textContent =
        "Thank you! Your message has been sent successfully.";

    form.reset();
});