import view from "./createView.js";
import carouselController from "./createModel.js";

const {controls, dotsContainer} = view;
const [initializeCarousel, carouselLogic] = carouselController;
const [next, prev] = controls;

/* Create "View-Model" - Connect rendered View with Model logic*/
[...dotsContainer.children].forEach((dot, index) => {
    dot.onclick = () => carouselLogic.setSlide(index + 1)
})
prev.addEventListener("click", () => {
    carouselLogic.setSlide(carouselLogic.getNextSlide());
});
next.addEventListener("click", () => {
    carouselLogic.setSlide(carouselLogic.getPrevSlide());
});

export default function createBinding() {
    initializeCarousel();
    return view;
};
