/* Create "View" */
import Controls from "../components/Controls.js";
import Carousel from "../components/Carousel.js";
import Dots from "../components/Dots.js";
import Button from "../components/Button.js";
import Wrapper from "../components/Wrapper.js";
import Modal from "../components/Modal.js";

const controls = new Controls();
const carousel = new Carousel();
const dotsContainer = new Dots();

const carouselContainer = new Wrapper(carousel, controls, dotsContainer);

const openBtn = new Button();
const closeBtn = new Button();

const modal = new Modal(closeBtn)
/* Need to preserve the order */
export default {
    render: {
        carouselContainer,
        openBtn,
    },
    modal,
    carousel,
    controls,
    dotsContainer,
    openBtn,
    closeBtn,
}
