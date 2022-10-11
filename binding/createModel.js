/* Create "Model" */
import CarouselController from "../core/CarouselController.js";
import ModalWindowController from "../core/ModalWindowController.js";
import view from "./createView.js";

const {carousel, dotsContainer, modal} = view;

export const carouselController = new CarouselController(carousel, dotsContainer.children);
export const modalController = new ModalWindowController(modal);
