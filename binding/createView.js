/* Create "View" */
import Controls from "../components/Controls.js";
import Carousel from "../components/Carousel.js";
import Dots from "../components/Dots.js";
import Button from "../components/Button.js";
import Wrapper from "../components/Wrapper.js";
import Modal from "../components/Modal.js";
import Form from "../components/Form.js";
import FormFirstName from "../components/FormFirstName.js";
import FormSecondName from "../components/FormSecondName.js";
import FormPassword from "../components/FormPassword.js";
import FormPasswordConfirmation from "../components/FormPasswordConfirmation.js";


const controls = new Controls();
const carousel = new Carousel();
const dotsContainer = new Dots();

const carouselContainer = new Wrapper(carousel, controls, dotsContainer);

const openBtn = new Button("Open");
const closeBtn = new Button("Close");
const modal = new Modal(closeBtn)

const formFirstName = new FormFirstName();
const formSecondName = new FormSecondName();
const formPassword = new FormPassword();
const formPasswordConfirmation = new FormPasswordConfirmation();
const confirmBtn = new Button("Confirm")
const form = new Form(formFirstName,formSecondName,formPassword,formPasswordConfirmation,confirmBtn);
/* Need to preserve the order */
export default {
    render: {
        carouselContainer,
        openBtn,
        form,
    },
    modal,
    carousel,
    controls,
    dotsContainer,
    openBtn,
    closeBtn,
    formFirstName,
    formSecondName,
    formPassword,
    formPasswordConfirmation,
    confirmBtn,
}
