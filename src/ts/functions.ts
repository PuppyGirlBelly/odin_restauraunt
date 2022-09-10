export function createElement(
  type: string,
  classes?: string[],
  innerText?: string
): HTMLElement {
  const element = document.createElement(type);

  if (typeof classes !== 'undefined') {
    classes.forEach((c) => {
      element.classList.add(c);
    });
  }

  if (typeof innerText !== 'undefined') {
    element.innerText = innerText;
  }

  return element;
}

export function createAnchor(
  href: string = '#',
  innerText?: string
): HTMLElement {
  const element = document.createElement('a');
  element.href = href;

  if (typeof innerText !== 'undefined') {
    element.innerText = innerText;
  }

  return element;
}
