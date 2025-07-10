document.getElementById("registrationForm").addEventListener("submit", function(event) {
    let valid = true;
    document.getElementById("successMessage").textContent = "";

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    document.getElementById("nameError").textContent = name === "" ? "Name is required." : "";
    document.getElementById("emailError").textContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Invalid email format.";
    document.getElementById("passwordError").textContent = password.length >= 6 ? "" : "Password must be at least 6 characters.";
    document.getElementById("confirmPasswordError").textContent = password === confirmPassword ? "" : "Passwords do not match.";

    if (name === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 6 || password !== confirmPassword) {
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    } else {
        event.preventDefault();
        document.getElementById("successMessage").textContent = "Form Submitted Successfully!";
    }
});
