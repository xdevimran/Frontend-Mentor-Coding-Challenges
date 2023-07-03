let retBox = document.querySelector(".main-card");
let pointBox = document.querySelector(".point-box-contain");
let retBtn = document.querySelector(".ret-btn");
let retNumber = document.querySelectorAll(".ret-sercel");
let clickToRet = document.querySelector(".clik-to-ret");
let ratingPoint;

retBtn.addEventListener("click", () => {
  retBox.classList.add("hide");
  pointBox.classList.toggle("hide");
});

retNumber.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.add("active");
    clickToRet.textContent = element.textContent;
  });
});
