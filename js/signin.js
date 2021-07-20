const learnMore = document.getElementById("learn-more");

learnMore.addEventListener("click", () => {
  console.log(document.querySelector(".info"));
  document.querySelector(".info").classList.remove("not-visible");
  learnMore.classList.add("not-visible");
});
