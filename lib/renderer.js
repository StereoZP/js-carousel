export default function renderer(root, view) {
    Object.values(view).forEach((viewElement) => {
        if (Array.isArray(viewElement)) {
            return root.append(...viewElement);
        }
        return root.append(viewElement)
    })
}
