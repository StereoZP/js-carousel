/* Create "Model" */
import CarouselController from "../core/CarouselController.js";
import ModalWindowController from "../core/ModalWindowController.js";
import FormController from "../core/FormController.js";
import view from "./createView.js";

const {carousel, dotsContainer, modal, confirmBtn} = view;

export const carouselController = new CarouselController(carousel, dotsContainer.children);
export const modalController = new ModalWindowController(modal);
export const formController = new FormController(confirmBtn);
