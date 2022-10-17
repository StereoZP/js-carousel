import {Component} from "../lib";

class Button extends Component {
    constructor(text) {
        super()
        this.text = text;
        return this.createComponent(this.render());

    }

    render() {
        return [{
            element: 'button',
            props: {attributes: ['data-tooltip', 'Открыть модалку']},
            children: [this.text]
        }]
    }
}

export default Button;
