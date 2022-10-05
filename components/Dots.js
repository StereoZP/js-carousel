import Component from "../lib";

class Dots extends Component {
    constructor() {
        return super().createComponent(this.render());
    }

    render() {
        return [{
            element: 'div',
            props: {classes: ['dot-container']},
            children: [{
                element: 'span',
                props: {classes: ['dot']},
            }, {
                element: 'span',
                props: {classes: ['dot']},
            }, {
                element: 'span',
                props: {classes: ['dot']},

            }]
        }]
    }
}

export default Dots;
