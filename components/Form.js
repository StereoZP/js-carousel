import {Component} from "../lib";

class Form extends Component {
    constructor(...children) { // Array<HTMLElement>
        super();
        this._children = children;
        return this.createComponent(this.render());
    }

    render() {
        return [{
            element: 'div',
            props: {classes: ['formWithValidation']},
            children: [this._children],
        }]

    }
}

export default Form;