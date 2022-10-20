import {Component} from "../lib";

class FormSecondName extends Component {
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
                            children: ['Second name:'],
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
export default FormSecondName;