const slides = [
  {
    title: "Mauntain",
    text: "bla bla vla lorem ipsum",
    img: "./img/17047.jpg",
  },
  {
    title: "Lake",
    text: "Azure lakes gleam, nature's tranquil mirror,Whispers of serenity, reflections grow clearer.",
    img: "./img/lone-tree_181624-46361.avif",
  },
  {
    title: "Forest",
    text: "some text about trees and other staff",
    img: "./img/atmosphere-01.jpg",
  },
];
const slider = document.querySelector(".slider");
slider.innerHTML = slides.map((el) => `
<div class="slide slide${slides.indexOf(el) + 1}">
<img src="${el.img}" alt="">

<div class="slide-content">
  <h1>${el.title}</h1>
  <p>${el.text}</p>
</div>
</div>`).join("");

const sliderItem = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
let count = 0;
let slidesCont = sliderItem.length - 1;

const setCurrentSlide = () => sliderItem[0].classList.toggle("active");
setCurrentSlide();
const setCurrentDot = () => dots[0].classList.toggle("active-dot");
setCurrentDot();

right.addEventListener("click", function () {
  sliderItem[count].classList.toggle("active");
  dots[count].classList.toggle("active-dot");
  count >= slidesCont ? (count = 0) : count++;
  sliderItem[count].classList.toggle("active");
  dots[count].classList.toggle("active-dot");
});
left.addEventListener("click", function () {
  sliderItem[count].classList.toggle("active");
  dots[count].classList.toggle("active-dot");
  count <= 0 ? (count = slidesCont) : count--;
  sliderItem[count].classList.toggle("active");
  dots[count].classList.toggle("active-dot");
});

dots.forEach(el => {
    el.addEventListener('click' , function () {
        sliderItem[count].classList.toggle("active");
        dots[count].classList.toggle("active-dot");
        count = this.dataset.index;  
        sliderItem[count].classList.toggle("active");
        dots[count].classList.toggle("active-dot");
    })
});

