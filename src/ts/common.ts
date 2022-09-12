/**
 * createElement.
 * Creates a declared HTML Element with provided classes and innerText
 *
 * @param type - A string representing the type of tag to create
 * @param classes - An optional array of strings of classes to add
 * @param innerText - Optional inner text for the element
 * @returns - An HTML element node
 */
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

/**
 * createAnchor.
 * Creates a declared HTML Anchor Element with provided classes and innerText
 *
 * @param href - Link that the anchor leads to. '#' by default.
 * @param classes - An optional array of strings of classes to add
 * @param innerText - Optional inner text for the anchor.
 * @returns An anchor element with provided href and inner text
 */

// Separate function since createElement() provides an HTMLElement, meanwhile
// we need an HTMLAnchorElement to set href.
export function createAnchor(
  /**
   * @defaultValue
   * Is set to '#' when not declared.
   */
  href: string = '#',
  classes?: string[],
  innerText?: string
): HTMLAnchorElement {
  const element: HTMLAnchorElement = document.createElement('a');
  element.href = href;

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

/**
 * createTableRow.
 * Creates a <tr> (table row) element comprised of strings in an array
 *
 * @param cells - An array of strings to be converted to a row of table cells
 * @returns A filled <tr> HTMLElement
 */
export function createTableRow(cells: string[]): HTMLElement {
  const row = createElement('tr');
  let cell: HTMLElement;

  cells.forEach((cellText) => {
    cell = createElement('td', undefined, cellText);

    row.appendChild(cell);
  });

  return row;
}

/**
 * createCard
 * Returns an html 'card' element featuring an img, title, and description
 *
 * @param src - string containing the path for the image element
 * @param title - string containing the title for the card
 * @param desc - string containing the description for the card
 */
export function createCard(src: string, title: string, desc: string): HTMLElement {
  const card = createElement('div', ['card']);
  const cardTitle = createElement('p', ['card-title'], title);
  const cardDesc = createElement('p', ['card-desc'], desc);

  const image = new Image();
  image.classList.add('card-img');
  image.src = src;

  card.append(image, cardTitle, cardDesc);

  return card;
}

/**
 * appendToContent.
 * Append a node onto the #content tag on the document
 *
 * @param node - An HTMLElement or HTMLAnchorElement to append to the page
 * @returns void
 */
export function appendToContent(node: HTMLElement | HTMLAnchorElement): void {
  const content = document.getElementById('content');

  content.appendChild(node);
}
