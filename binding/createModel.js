/* Create "Model" */
import CarouselController from "../core/CarouselController.js";
import view from "./createView.js";

const {carousel, dotsContainer} = view;
const carouselController = new CarouselController(carousel, dotsContainer.children);

export default carouselController;
