"use strict";

const new_game = document.querySelector(".new_game");
const roll_dice = document.querySelector(".roll_dice");
const hold = document.querySelector(".hold");
const random = document.querySelector(".random");
const totalscore1El = document.querySelector(".totalscore--0");
const totalscore2El = document.querySelector(".totalscore--1");
const dice_image = document.querySelector(".dice");
const current_score_p1 = document.querySelector(".current--0");
const current_score_p2 = document.querySelector(".current--1");
const game_sectionel = document.querySelector(".game_section");
const game_section_rollel = document.querySelector(".game_section_roll");
const game_winnerel = document.querySelector(".game_winner");
// console.log(random_dice);
let current_score, activePlayer, totalscore, playing;

const init = function () {
  current_score = 0;
  totalscore = [0, 0];
  playing = true;
  activePlayer = 0;
  totalscore1El.textContent = 0;
  totalscore2El.textContent = 0;
  current_score_p1.textContent = 0;
  current_score_p2.textContent = 0;
  document.querySelector(".player-0").textContent = "Player 0";
  document.querySelector(".player-1").textContent = "Player 1";
  random.classList.add("hidden");
  game_sectionel.classList.add("game_section");
};
init();
roll_dice.addEventListener("click", function () {
  if (playing) {
    const random_dice = Number(Math.floor(Math.random(0, 1) * 6) + 1);
    random.classList.remove("hidden");
    dice_image.src = `dice-${random_dice}.png`;
    if (random_dice !== 1) {
      current_score += random_dice;
      document.querySelector(`.current--${activePlayer}`).textContent =
        current_score;
    } else {
      switchPlayer();
    }
  }
});
function switchPlayer() {
  current_score = 0;
  document.querySelector(`.current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  game_sectionel.classList.toggle("game_section");
  game_sectionel.classList.add("game_section_roll");
  //   game_section_rollel.classList.toggle("game_section");
}
hold.addEventListener("click", function () {
  if (playing) {
    document.querySelector(`.current--${activePlayer}`).textContent = 0;
    totalscore[activePlayer] += current_score;
    document.querySelector(`.totalscore--${activePlayer}`).textContent =
      totalscore[activePlayer];
    if (totalscore[activePlayer] >= 20) {
      playing = false;
      document.querySelector(
        `.player-${activePlayer}`
      ).textContent = `🥳 Player ${activePlayer} wins`;
      random.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});
new_game.addEventListener("click", init);
