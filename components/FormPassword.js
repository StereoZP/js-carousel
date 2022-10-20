import {Component} from "../lib";

class FormPassword extends Component {
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
                            children: ['Password:'],
                        }
                    ],
                },
                {
                    element: 'div',
                    props: {},
                    children: [{
                        element: 'input',
                        props: {classes: ['password', 'field'], attributes: ['type', 'password']},
                        children: [],
                    }],
                }
            ],
        }]
    }
}
export default FormPassword;