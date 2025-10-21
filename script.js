let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const message = document.getElementById('message');
const attemptsText = document.getElementById('attempts');
const userGuess = document.getElementById('userGuess');
const checkBtn = document.getElementById('checkBtn');
const restartBtn = document.getElementById('restartBtn');

checkBtn.addEventListener('click', () => {
  const guess = Number(userGuess.value);
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "⚠️ Please enter a number between 1 and 100.";
    return;
  }

  if (guess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    message.style.color = "#00ff90";
    attemptsText.textContent = `You guessed it in ${attempts} attempts.`;
    checkBtn.classList.add('hidden');
    restartBtn.classList.remove('hidden');
  } else if (guess < randomNumber) {
    message.textContent = "📉 Too low! Try again.";
    message.style.color = "#ffeb3b";
  } else {
    message.textContent = "📈 Too high! Try again.";
    message.style.color = "#ffeb3b";
  }

  attemptsText.textContent = `Attempts: ${attempts}`;
  userGuess.value = "";
  userGuess.focus();
});

restartBtn.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  message.textContent = "";
  attemptsText.textContent = "";
  restartBtn.classList.add('hidden');
  checkBtn.classList.remove('hidden');
});