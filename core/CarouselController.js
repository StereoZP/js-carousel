export default class CarouselController {
    slideIndex = 1;
    initialized = false;

    constructor(slides, dots) {

        this.slides = slides
        this.dots = dots
        return [this.initialize.bind(this), {
            setSlide: this.setCurrentSlide.bind(this),
            getNextSlide: this.getNextSlide.bind(this),
            getPrevSlide: this.getPrevSlide.bind(this),
        }];
    }

    initialize() {
        if (this.initialized) {
            return console.error('Carousel has been initialized')
        }
        this.initialized = true;
        this.setCurrentSlide(this.slideIndex);
    }

    getNextSlide() {
        return this.slideIndex + 1;
    }

    getPrevSlide() {
        return this.slideIndex - 1;

    }

    setCurrentSlide(n) {
        this.slideIndex = n
        this.showSlides(this.slideIndex);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1
        }
        if (n < 1) {
            this.slideIndex = this.slides.length
        }
        for (let i of this.slides) {
            i.classList.add("display")
            i.classList.remove("displayBlock")
        }
        for (let i of this.dots) {
            i.classList.remove("active");
        }
        this.slides[this.slideIndex - 1].classList.remove("display")
        this.slides[this.slideIndex - 1].classList.add("displayBlock")
        this.dots[this.slideIndex - 1].classList.add("active");
    }

}