import {Component} from "../lib";

class Wrapper extends Component {
    constructor(...children) { // Array<HTMLElement>
        super();
        this._children = children;
        return this.createComponent(this.render());
    }

    render() {
        return [{
            element: 'div',
            props: {classes: ['slideshow-container']},
            children: [...this._children],
        }]

    }
}

export default Wrapper;
