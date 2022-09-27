'use strict';
let slideIndex = 1;
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");
dots.forEach((dot,index)=>{dot.onclick=()=>currentSlide(index-1)})

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
        for (const i of slides) {
            i.classList.add("display")
            i.classList.remove("displayBlock")
        }
        for (const i of dots) {
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


/*debugger
const carousel = document.getElementById('carousel');
    const div = new Component().render();
    carousel.append(div);

function createElement(type, props, ...children) {
    const element = document.createElement(type);
    element.append(...children);
    if(props) {
        const keys = Object.keys(props);
        keys.forEach((key)=>{
            if(key === 'attributes'){
                element.setAttribute(...props[key]);
            }
            if(key === 'classes') {
                element.classList.add(...props[key]);
            }
            if(key === 'listeners') {
                props[key].forEach(([eventName, listener, opts]) => {
                    element.addEventListener(eventName, listener, opts);
                });
            }
            element.setAttribute(key, props[key]); // TODO: check false boolean
        })
    }
    return element;
}

class Component {
    constructor(){}
    render(){
        return (
            createElement('div', {classes:['mySlides','fade']},
                createElement('img', {attributes:['src','./images/lampa.jpg']})),
        createElement('div', {classes:['mySlides','fade']},
            createElement('img', {attributes:['src','./images/pirs.jpg']}))
        );
    }
}
*/
