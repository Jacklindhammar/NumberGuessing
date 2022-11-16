const message3 = document.getElementById("message3");
const message2 = document.getElementById("message2");
const message1 = document.getElementById("message1");
function newRandomNumber() {
  return Math.floor(Math.random() * 101);
}
let no_of_guesses = 0;
const guessedNumbers = [];
const randomNumber = newRandomNumber();
function guessNumber() {
  const guess = document.getElementById("guess").value;
  switch (true) {
    case no_of_guesses == 5:
      message3.innerText = "No more guesses!";
      no_of_guesses = 0;
      guessedNumbers.length = 0;
      newRandomNumber();
      break;
    case guess > 100:
      message3.innerText = "Please pick a number between 0 and 100!";
      break;
    case guess < randomNumber:
      message3.innerText = "Higher!";
      no_of_guesses++;
      guessedNumbers.push(guess);
      message1.innerText = `No. Of Guesses: ${no_of_guesses}`;
      break;
    case guess > randomNumber:
      message3.innerText = "Lower!";
      no_of_guesses++;
      guessedNumbers.push(guess);
      message1.innerText = `No. Of Guesses: ${no_of_guesses}`;
      break;
    case guess == randomNumber:
      message3.innerText = "Correct!";
      no_of_guesses++;
      guessedNumbers.push(guess);
      message1.innerText = `No. Of Guesses: ${no_of_guesses}`;
      break;
    default:
      break;
  }
  message2.innerText = guessedNumbers.join(", ");
}






