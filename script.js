document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const errorMessages = [];

    if (firstName === "") {
        errorMessages.push("First Name cannot be empty");
        firstNameInput.classList.add("error");
        
    }


}