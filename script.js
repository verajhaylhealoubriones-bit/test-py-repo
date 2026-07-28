console.log('Javascript is connected');

// let attempts = 1;
// attempts = attempts + 1;

// console.log(attempts);

// const courseName = "Web Development";
// const passingScore = 75;
// passingScore = 80;

// console.log(passingScore);
// const PI = 3.14;


// const name = "Lhealou Jhay";

// const age = 19;

// const isPassed = true;

// let result;

// const selectedvalue = null;

// const score = 75;

// score > 80
// score === 75
// score == 75
// if (score == '75'){
//     console.log('true');
// } else{
//     console.log('false');
// }

// const score =82;
// if (score >= 90){
//     console.log("Excellence");

// }

let score = 0; // Required mutable tracker

const display = document.querySelector("#val");
const msg = document.querySelector("#msg");
// Conditional logic based on score ranges


GamepadButton.addEventListener('click', () => {
    score++;
    display.textContent = `Score: ${score}`
});

