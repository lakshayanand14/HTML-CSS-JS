"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close_modal = document.querySelector(".close_modal");
const modal_btns = document.querySelectorAll(".show_modal");
// const remove_modal = function (cls) {
//   modal.classList.remove(cls);
// };
// const remove_overlay = function (cls) {
//   overlay.classList.remove(cls);
// };
// const add_modal = function (cls) {
//   modal.classList.add(cls);
// };
// const add_overlay = function (cls) {
//   overlay.classList.add(cls);
// };
const open_modal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closing_modal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < modal_btns.length; i++) {
  console.log(modal_btns[i].textContent);
  modal_btns[i].addEventListener(
    "click",
    open_modal
    // modal.style.display = "block";
    // overlay.style.display = "block";
    // modal.classList.remove("hidden");
    // overlay.classList.remove("hidden");
    // remove_modal("hidden");
    // remove_overlay("hidden");
  );
}
close_modal.addEventListener(
  "click",
  closing_modal
  //   modal.style.display = "none";
  //   overlay.style.display = "none";
  //   modal.classList.add("hidden");
  //   overlay.classList.add("hidden");
  //   add_modal("hidden");
  //   add_overlay("hidden");
);
overlay.addEventListener(
  "click",
  closing_modal
  //   modal.style.display = "none";
  //   overlay.style.display = "none";
  //   modal.classList.add("hidden");
  //   overlay.classList.add("hidden");
  //   add_modal("hidden");
  //   add_overlay("hidden");
);

// document.addEventListener("keydown", function () {
//   console.log("A key was pressed");
// });

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closing_modal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Backspace" && !modal.classList.contains("hidden")) {
    closing_modal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && modal.classList.contains("hidden")) {
    open_modal();
  }
});
