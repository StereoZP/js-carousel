const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
    prev.addEventListener("click", ()=>{
        showSlides(slideIndex += -1);
    });
    next.addEventListener("click", ()=>{
        showSlides(slideIndex += 1);
    });

