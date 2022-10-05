import view from "./createView.js";
import carouselController from "./createModel.js";

const {controls, dotsContainer} = view;
const [start, {setSlide, getNextSlide, getPrevSlide}] = carouselController;
const [prev, next] = controls;

/* Create "View-Model" - Connect rendered View with Model logic*/
[...dotsContainer.children].forEach((dot, index) => {
    dot.onclick = () => setSlide(index + 1)
})
prev.addEventListener("click", () => {
    setSlide(getNextSlide());
});
next.addEventListener("click", () => {
    setSlide(getPrevSlide());
});

export default () => {
    start();
    return view;
};
