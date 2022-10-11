import {renderer} from "../lib";

export default class ModalWindowController {
    isOpen = false;
    root = document.getElementById('modal')

    constructor(view) {
        this.view = view;
    }

    setWindow(state) {
        this.isOpen = state;
        if (this.isOpen) {
            return renderer(this.root, {element: this.view})
        }
        return this.root.replaceChildren();
    }

    getState() {
        return this.isOpen;
    }

}