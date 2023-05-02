// variable

// const accordion = document.getElementsByClassName("content-container");

// for (i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// }

const accordionContainer = document.querySelectorAll(".content-container");

accordionContainer.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
