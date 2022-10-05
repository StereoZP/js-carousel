import {Component} from "../lib";

class Carousel extends Component {
    constructor() {
        return super().createComponent(this.render());
    }

    render() {
        return [{
            element: 'div',
            props: {classes: ['mySlides', 'fade']},
            children: [
                {element: 'img', props: {attributes: ['src', './images/lampa.jpg']}}
            ]
        }, {
            element: 'div',
            props: {classes: ['mySlides', 'fade']},
            children: [
                {element: 'img', props: {attributes: ['src', './images/pirs.jpg']}}
            ]
        }, {
            element: 'div',
            props: {classes: ['mySlides', 'fade']},
            children: [
                {element: 'img', props: {attributes: ['src', './images/space.jpg']}}
            ]
        }]
    }
}

export default Carousel;
