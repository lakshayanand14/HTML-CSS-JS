// "use strict";

// console.log(document.querySelector(".message"));
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🎉 Correct Number";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".correct_number").textContent = 13;
// document.querySelector(".user_score").textContent = 10;

// document.querySelector(".guess_number").value = 12;
// console.log(document.querySelector(".guess_number").value);
// const check_number = function () {
//   console.log(document.querySelector(".guess_number").value);
// };
let number = Math.floor(Math.random(0, 1) * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess_number").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number! ☹️";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "🎉 Correct Number";
    document.querySelector(".correct_number").textContent = guess;
    document.querySelector(".user_score").textContent = score;
    document.body.style.background = "green";
    document.querySelector(".correct_number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number && score > 1) {
    document.querySelector(".message").textContent =
      guess > number ? "📈 Too high" : "📉 Too low";
    score -= 1;
    document.querySelector(".user_score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "You Loose 😩";
    document.querySelector(".user_score").textContent = 0;
    document.body.style.background = "red";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  number = Math.floor(Math.random(0, 1) * 20) + 1;
  score = 20;
  highscore = highscore;
  document.querySelector(".user_score").textContent = score;
  document.querySelector(".correct_number").textContent = "?";
  document.body.style.background = "rgb(51, 48, 48)";
  document.querySelector(".correct_number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start guessing.......";
  document.querySelector(".guess_number").value = " ";
});
// document.querySelector(".check").addEventListener("click", check_number);
