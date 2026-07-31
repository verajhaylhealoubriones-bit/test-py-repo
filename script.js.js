console.log("JavaScript is connected");

let score = 0;

const AddScore = document.querySelector('#AddScore');
const SubtractScore = document.querySelector('#SubtractScore');
const resetScore = document.querySelector('#resetScore');
const display = document.querySelector('#display');

AddScore.addEventListener('click', () => {
  score++;
  display.textContent = score;
});

SubtractScore.addEventListener('click', () => {
  score--;
  display.textContent = score;
});

resetScore.addEventListener('click', () => {
  score = 0;
  display.textContent = score;
});