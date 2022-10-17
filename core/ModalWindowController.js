import {renderer} from "../lib";

export default class ModalWindowController {
    isOpen = false;
    root = document.getElementById('modal')

    constructor(view,tooltipElem) {
        this.view = view;
        this.tooltipElem = tooltipElem;
    }

    setWindow(state) {
        this.isOpen = state;
        this.root.classList.remove("hidden");
        if (!this.isOpen){
            return this.root.classList.add("hidden");
        }
        return renderer(this.root, {element: this.view})
    }

    Onmouseover(event) {

        let target = event.target
        // если у нас есть подсказка...
        let tooltipHtml = target.dataset.tooltip;
        if (!tooltipHtml) return;

        // ...создадим элемент для подсказки

        this.tooltipElem = document.createElement('div');
        this.tooltipElem.className = 'tooltip';
        this.tooltipElem.innerHTML = tooltipHtml;
        document.body.append(this.tooltipElem);

        // спозиционируем его сверху от аннотируемого элемента (top-center)
        let coords = target.getBoundingClientRect();

        let left = coords.left + (target.offsetWidth - this.tooltipElem.offsetWidth) / 2;
        if (left < 0) left = 0; // не заезжать за левый край окна

        let top = coords.top - this.tooltipElem.offsetHeight - 5;
        if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
            top = coords.top + target.offsetHeight + 5;
        }

        this.tooltipElem.style.left = left + 'px';
        this.tooltipElem.style.top = top + 'px';
    };

    Onmouseout() {
        if (this.tooltipElem) {
            this.tooltipElem.remove();
            this.tooltipElem = null;
        }

    };
}



