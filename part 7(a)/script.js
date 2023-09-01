// "use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🎉Correct Answer";

// document.querySelector(".number").textContent = 13;

// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;

// console.log(document.querySelector(".guess").value);

let randomNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = randomNumber;
console.log(randomNumber);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    console.log(
      (document.querySelector(".message").textContent = "⛔ No Number")
    );
  } else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "🎉Correct Number";

    document.querySelector(".number").textContent = randomNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
  } else if (guess > randomNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "📉Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😒You Lost";
    }
  } else if (guess < randomNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "📈Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😒You Lost";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  console.log((randomNumber = Math.trunc(Math.random() * 20) + 1));

  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
