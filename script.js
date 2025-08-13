document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const category = document.getElementById("category").value;
    const agree = document.getElementById("agree").checked;
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const subjectError = document.getElementById("subjectError");
    const categoryError = document.getElementById("categoryError");
    const agreeError = document.getElementById("agreeError");
    const messageError = document.getElementById("messageError");
    const successMsg = document.getElementById("successMsg");

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    subjectError.textContent = "";
    categoryError.textContent = "";
    agreeError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (phone === "") {
        phoneError.textContent = "Phone number is required.";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        phoneError.textContent = "Enter a valid 10-digit phone number.";
        isValid = false;
    }

    if (subject === "") {
        subjectError.textContent = "Subject is required.";
        isValid = false;
    }

    if (category === "") {
        categoryError.textContent = "Please select a category.";
        isValid = false;
    }

    if (!agree) {
        agreeError.textContent = "You must agree to the terms.";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent = "Message cannot be empty.";
        isValid = false;
    }

    if (isValid) {
        successMsg.textContent = "Form submitted successfully!";
    }
});
