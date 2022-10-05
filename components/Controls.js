import Component from "../lib";

class Carousel extends Component {
    constructor() {
        return super().createComponent(this.render());
    }

    render() {
        return [{
            element: 'a',
            props: {classes: ['prev']},
            children: ['<']
        }, {
            element: 'a',
            props: {classes: ['next']},
            children: ['>']
        }]
    }
}

export default Carousel;
