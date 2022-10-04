import createElement from "./utils.js"
class Component {
    constructor(){}
    render(){
        return (
            createElement('div', {classes:['mySlides','fade']},
                createElement('img', {attributes:['src','./images/lampa.jpg']})),
                createElement('div', {classes:['mySlides','fade']},
                    createElement('img', {attributes:['src','./images/pirs.jpg']}))
        );
    }
}
export default Component;