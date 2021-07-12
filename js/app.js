let languageButton = document.querySelector(".btn-language");
let languageDropdown = document.querySelector(".dropdown");

console.log(languageButton)
languageButton.addEventListener("click", ()=>{
    languageDropdown.classList.toggle("ddown-visible");
})