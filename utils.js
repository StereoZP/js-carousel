function createElement(type, props, ...children) {
    const element = document.createElement(type);
    element.append(...children);
    if(props) {
        const keys = Object.keys(props);
        keys.forEach((key)=>{
            if(key === 'attributes'){
                element.setAttribute(...props[key]);
            }
            if(key === 'classes') {
                element.classList.add(...props[key]);
            }
            if(key === 'listeners') {
                props[key].forEach(([eventName, listener, opts]) => {
                    element.addEventListener(eventName, listener, opts);
                });
            }
            element.setAttribute(key, props[key]); // TODO: check false boolean
        })
    }
    return element;
}
export default createElement;