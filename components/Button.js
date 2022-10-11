import {Component} from "../lib";

class Button extends Component {
    constructor() {
        return super().createComponent(this.render());
    }

    render() {
        return [{
            element: 'button',
            props: {},
            children: ['test']
        }]
    }
}

export default Button;
