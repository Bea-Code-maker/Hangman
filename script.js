// Available words for guessing
const words = ["javascript", "developer", "programming", "html", "css", "website"];

// Randomly select a word
function chooseWord() {
  return words[Math.floor(Math.random() * words.length)];
}
let wordToGuess = chooseWord();
let guessedWord = Array(wordToGuess.length).fill('_');
let lives = 7;

// Function to display the guessed word
function displayWord() {
  document.querySelector('.word-to-guess').textContent = guessedWord.join(' ');
}

// Call the function to display the initial guessed word
displayWord();

// Check the guessed letter
function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const guessedLetter = guessInput.value.toLowerCase();

  if (!guessedLetter.match(/[a-z]/)) {
    document.getElementById('message').textContent = 'Enter a valid letter (a-z)!';
    return;
  }

  if (wordToGuess.includes(guessedLetter)) {
    for (let i = 0; i < wordToGuess.length; ++i) {
      if (wordToGuess[i] === guessedLetter) {
        guessedWord[i] = guessedLetter;
      }
    }
    displayWord();

    if (!guessedWord.includes('_')) {
      document.getElementById('message').textContent = 'Congratulations, you guessed the word!';
      disableInput();
    }
  } else {
    --lives;
    document.getElementById('lives').textContent = lives;
    if (lives === 0) {
      document.getElementById('message').textContent = `Game over! The word was "${wordToGuess}".`;
      disableInput();
    }
  }
  guessInput.value = '';
}

// Function to disable input after game ends
function disableInput() {
  document.getElementById('guessInput').disabled = true;
  document.querySelector('button').disabled = true;
}

