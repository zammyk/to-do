export function createElement(type, classes, text = "", children = []) {
  const ele = document.createElement(type);

  if (classes.length > 0) {
    classes.forEach((cls) => {
      ele.classList.add(cls);
    });
  }

  if (text != "") ele.textContent = text;

  if (children.length > 0) {
    children.forEach((child) => {
      ele.appendChild(child);
    });
  }

  return ele;
}

export function createImage(src, alt) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  return img;
}

export function deleteAllChildren(node) {
  while (node.firstChild != null) node.removeChild(node.firstChild);
}

export function deleteAllChildrenExceptLast(node) {
  while (node.children.length > 1) node.removeChild(node.firstChild);
}
