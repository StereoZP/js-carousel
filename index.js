'use strict';
import Carousel from "./components/Carousel.js";
import Dots from "./components/Dots.js";
import Controls from "./components/Controls.js";

let slideIndex = 1;

const controls = new Controls();
const carousel = new Carousel();
const dotsContainer = new Dots();

const root = document.getElementById('root');

root.append(...carousel);
root.append(...controls);
root.append(dotsContainer);

const dots = dotsContainer.children
const [prev, next] = controls;
const slides = carousel;

[...dots].forEach((dot, index) => {
    dot.onclick = () => currentSlide(index + 1)
})

showSlides(slideIndex);

function currentSlide(n) {
    slideIndex = n
    showSlides(slideIndex);
}

function showSlides(n) {

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i of slides) {
        i.classList.add("display")
        i.classList.remove("displayBlock")
    }
    for (let i of dots) {
        i.classList.remove("active");
    }
    slides[slideIndex - 1].classList.remove("display")
    slides[slideIndex - 1].classList.add("displayBlock")
    dots[slideIndex - 1].classList.add("active");
}

prev.addEventListener("click", () => {
    slideIndex -= 1
    showSlides(slideIndex);
});
next.addEventListener("click", () => {
    slideIndex += 1
    showSlides(slideIndex);
});
