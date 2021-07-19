let languageButton = document.querySelector(".btn-language");
let languageDropdown = document.querySelector(".dropdown");
let footerLanguageButton = document.querySelector(".footer-icon");
languageButton.addEventListener("click", () => {
  languageDropdown.classList.toggle("ddown-visible");
});
footerLanguageButton.addEventListener("click", () => {
  document.getElementById("footer-dropdown").classList.toggle("ddown-visible");
});
//accordian questions
window.onload = function () {
  accordians();
};
var btn = document.getElementsByClassName("accordian-button");

var accordians = function () {
  for (let i = 0; i < btn.length; i++) {
    console.log("called");
    document
      .getElementById("btn-" + btn[i].id)
      .classList.add("accordian-answer");
    btn[i].addEventListener("click", () => {
      btn[i].children[0].classList.toggle("fa-plus");
      btn[i].children[0].classList.toggle("fa-times");
      document
        .getElementById("btn-" + btn[i].id)
        .classList.toggle("accordian-answer");
      document
        .getElementById("btn-" + btn[i].id)
        .classList.toggle("accordian-answer-visible");
    });
  }
};

// btn.addEventListener("click", () => {
//   btn.forEach((element) => {
//     console.log(this.id);
//     console.log(btn.id);
//   });
// });
