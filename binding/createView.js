/* Create "View" */
import Controls from "../components/Controls.js";
import Carousel from "../components/Carousel.js";
import Dots from "../components/Dots.js";

const controls = new Controls();
const carousel = new Carousel();
const dotsContainer = new Dots();

/* Need to preserve the order */
export default {
    carousel,
    controls,
    dotsContainer,
}
