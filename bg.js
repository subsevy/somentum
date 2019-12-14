const body = document.querySelector("body");
const main = document.querySelector("main");
const container = document.querySelector(".container");

const IMAGE_NUMBER = 5;

function getRandomNumber() {
  return Math.ceil(Math.random() * IMAGE_NUMBER);
}

function paintBackGround(num) {
  const image = new Image();
  image.src = `images/${num}.jpg`;
  image.addEventListener("load", function() {
    image.remove();
    main.style.background = `url(images/${num}.jpg)`;
    main.style.backgroundSize = "cover";
    main.style.animation = "fadeIn 1s linear";
    container.style.display = "block";
  });
}

function init() {
  const randomNumber = getRandomNumber();
  paintBackGround(randomNumber);
}

init();
