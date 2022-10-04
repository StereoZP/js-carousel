'use strict';
let slideIndex = 1;
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");
dots.forEach((dot,index)=>{dot.onclick=()=>currentSlide(index+1)})

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
        slides[slideIndex-1].classList.remove("display")
        slides[slideIndex-1].classList.add("displayBlock")
        dots[slideIndex-1].classList.add("active");
}
    prev.addEventListener("click", ()=>{
        slideIndex-= 1
        showSlides(slideIndex);
    });
    next.addEventListener("click", ()=>{
        slideIndex+= 1
        showSlides(slideIndex);
    });

/*const carousel = document.getElementById('carousel');
    const div = new Component().render();
    carousel.append(div);*/


