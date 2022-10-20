import {Component} from "../lib";

class FormPasswordConfirmation extends Component {
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
                            children: ['Password confirmation:'],
                        }
                    ],
                },
                {
                    element: 'div',
                    props: {},
                    children: [{
                        element: 'input',
                        props: {classes: ['passwordConfirmation', 'field'], attributes: ['type', 'password']},
                        children: [],
                    }],
                }
            ],
        }]
    }
}
export default FormPasswordConfirmation;