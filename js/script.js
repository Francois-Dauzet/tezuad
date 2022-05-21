const btnLeft = document.querySelector("#btnLeft21");
const btnRight = document.querySelector("#btnRight21");

let countSlide = 1;
let totalSlide = 9;

btnLeft.addEventListener("click", () => {
  if (countSlide > 1) {
    document.querySelector("#btnLeft21").classList.add("hidden");
    document.querySelector(".slide" + countSlide).classList.add("hidden");
    setTimeout(() => {
      document
        .querySelector(".slide" + countSlide)
        .classList.add("displaySlide");
    }, 500);
    setTimeout(() => {
      setTimeout(() => {
        document.querySelector("#btnLeft21").classList.remove("hidden");
      }, 500);
      countSlide--;

      document
        .querySelector(".slide" + countSlide)
        .classList.remove("displaySlide");

      setTimeout(() => {
        console.log(countSlide);
        document
          .querySelector(".slide" + countSlide)
          .classList.remove("hidden");
      }, 100);
    }, 500);
  }
});

btnRight.addEventListener("click", () => {
  if (countSlide < totalSlide) {
    document.querySelector("#btnRight21").classList.add("hidden");
    document.querySelector(".slide" + countSlide).classList.add("hidden");

    setTimeout(() => {
      document
        .querySelector(".slide" + countSlide)
        .classList.add("displaySlide");
    }, 500);
    setTimeout(() => {
      setTimeout(() => {
        document.querySelector("#btnRight21").classList.remove("hidden");
      }, 500);
      countSlide++;

      document
        .querySelector(".slide" + countSlide)
        .classList.remove("displaySlide");
      setTimeout(() => {
        document
          .querySelector(".slide" + countSlide)
          .classList.remove("hidden");
      }, 100);
    }, 500);
  }
});
