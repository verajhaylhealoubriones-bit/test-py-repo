const nameInput = document.querySelector("#nameInput");
const welcomeMessage = document.querySelector("#welcomeMessage");

nameInput.addEventListener("input", () => {
    welcomeMessage.textContent = "Welcome, " + nameInput.value + "!";
});


// FORM SUBMISSION

const form = document.querySelector("#registrationForm");
const studentName = document.querySelector("#studentName");
const course = document.querySelector("#course");
const registrationMessage = document.querySelector("#registrationMessage");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = studentName.value;
    const studentCourse = course.value;

    registrationMessage.textContent =
        "Registration successful! Welcome " +
        name +
        " - " +
        studentCourse +
        ".";
});


//  TOGGLE THEME

const themeButton = document.querySelector("#themeButton");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


// KEYBOARD 

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        welcomeMessage.textContent = "";
    }

});