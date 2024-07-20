'use strict';

// In this number guessing game, a secret number between 1 and 20 is randomly generated. The player makes guesses and receives hints if their guess is too low or too high. When the correct number is guessed, the background color changes. The game also features a reset button to play again, and the highest score achieved is saved.

// Define the Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Define Score
let score = 20;

// Defining High Score
let highScore = 0;

// Making a Function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // If there is No Number
  if (!guess) {
    displayMessage('No Number ⛔️');
  }

  // For Correct Guess
  else if (guess === secretNumber) {
    displayMessage('Correct Number 🎉');

    //Changes in CSS File
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // For Incorrect Guess
  else if (guess !== secretNumber) {
    // For score greater than 1
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High 📈' : 'Too Low 📉');

      score--;
      document.querySelector('.score').textContent = score;
    }
    // Score Reaches 0
    else {
      displayMessage('You Lost the Game');
      document.querySelector('.score').textContent = '0';
    }
  }
});

// Again Button
document.querySelector('.again').addEventListener('click', function () {
  // Restore Initial Values of Score and Secret Number
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Restore Initial Conditions of Message, Score, Secret Number

  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  // Empty value of Guess Class
  document.querySelector('.guess').value = '';

  // Restore Background
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
