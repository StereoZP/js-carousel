export default class Component {
    createElement(type, props, ...children) {
        const element = document.createElement(type);
        element.append(...children);
        if (props) {
            const keys = Object.keys(props);
            keys.forEach((key) => {
                if (key === 'attributes') {
                    element.setAttribute(...props[key]);
                }
                if (key === 'classes') {
                    element.classList.add(...props[key]);
                }
                if (key === 'listeners') {
                    props[key].forEach(([eventName, listener, opts]) => {
                        element.addEventListener(eventName, listener, opts);
                    });
                }
                element.setAttribute(key, props[key]); // TODO: check false boolean
            })
        }
        return element;
    }

    createSubTree(subtree) {
        if (typeof subtree === 'string') { // if rendered element is a string, not an element
            return this.createElement('span', {}, subtree);
        }
        const {element, props, children} = subtree
        const renderedChildren = children ? children.map(this.createSubTree.bind(this)) : []
        return this.createElement(element, props, ...renderedChildren);
    }

    createTree(tree) {
        return tree.map(this.createSubTree.bind(this));
    }

    createComponent(tree) {
        const nodes = this.createTree(tree)
        if (nodes.length > 1) {
            return nodes
        }
        return nodes[0];
    }
}
