import view from "./createView.js";
import {carouselController, modalController} from "./createModel.js";


const {controls, dotsContainer, closeBtn, openBtn} = view;
const [initializeCarousel, carouselLogic] = carouselController;
// const {setWindow} = modalController;
const [prev, next] = controls;


/* Create "View-Model" - Connect rendered View with Model logic*/
[...dotsContainer.children].forEach((dot, index) => {
    dot.onclick = () => carouselLogic.setSlide(index + 1)
})
prev.addEventListener("click", () => {
    carouselLogic.setSlide(carouselLogic.getPrevSlide());
});
next.addEventListener("click", () => {
    carouselLogic.setSlide(carouselLogic.getNextSlide());
});

openBtn.addEventListener('click', () => {
    modalController.setWindow(true);
});

openBtn.addEventListener('mouseover', (event) => {
    modalController.Onmouseover(event)
});

openBtn.addEventListener('mouseout', () => {
    modalController.Onmouseout()
});

closeBtn.addEventListener('click', () => {
    modalController.setWindow(false);
})


export default function createBinding() {
    initializeCarousel();
    return view.render;
};
