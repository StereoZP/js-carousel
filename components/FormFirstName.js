import {Component} from "../lib";

class FormFirstName extends Component {
    constructor() {
        return super().createComponent(this.render());
    }

    render() {
        return [{
            element: 'div',
            props: {},
            children: [
                {
                    element: 'div',
                    props: {},
                    children: [
                        {
                            element: 'a',
                            props: {},
                            children: ['First name:'],
                        }
                    ],
                },
                {
                    element: 'div',
                    props: {},
                    children: [{
                        element: 'input',
                        props: {classes: ['from', 'field'], attributes: ['type', 'text']},
                        children: [],
                    }],
                }
            ],
        }]
    }
}
export default FormFirstName;