export function splitNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    const chars = node.textContent.split("");
    const fragment = document.createDocumentFragment();
    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      fragment.appendChild(span);
    });
    return fragment;
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    const newEl = document.createElement(node.tagName);
    for (let attr of node.attributes) {
      newEl.setAttribute(attr.name, attr.value);
    }
    node.childNodes.forEach((child) => {
      newEl.appendChild(splitNode(child));
    });
    return newEl;
  }
  return document.createDocumentFragment();
}
