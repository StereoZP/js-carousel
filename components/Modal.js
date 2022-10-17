import {Component} from "../lib";

class Modal extends Component {
    constructor(...children) { // Array<HTMLElement>
        super();
        this._children = children;
        return this.createComponent(this.render());
    }

    render() {
        return [{
            element: 'div',
            props: {classes: ['modal']},
            children: [
                {
                    element: 'div',
                    props: {classes: ['modal-content']},
                    children: ['CONTENT',...this._children],
                }
            ],
        }]

    }
}

export default Modal;
