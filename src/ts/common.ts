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
  classes?: string[],
  innerText?: string,
  /**
   * @defaultValue
   * Is set to '#' when not declared.
   */
  href: string = '#'
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
 * createList
 * creates an ordered or unordered list consisting of a list of strings or
 * HTMLElements.
 *
 * @param ordered - true if ordered list, false for unordered list
 * @param items - string of text or html elements in list
 * @param classes - classes for outer list element
 */
export function createList(
  ordered: boolean,
  items: string[] | HTMLElement[],
  classes?: string[]
): HTMLElement {
  const list = ordered
    ? createElement('ol', classes)
    : createElement('ul', classes);

  items.forEach((element) => {
    if (typeof element === 'string') {
      const e = createElement('li', ['list-item'], element);
      list.append(e);
    } else {
      list.append(element);
    }
  });

  return list;
}

/**
 * createCard
 * Returns an html 'card' element featuring an img, title, and description
 *
 * @param img - string containing the path for the image element
 * @param title - string containing the title for the card
 * @param desc - string containing the description for the card
 */
export function createCard(
  img: string,
  title: string,
  desc: string | HTMLElement
): HTMLElement {
  const card = createElement('div', ['card']);
  const cardTitle = createElement('p', ['card-title'], title);
  let cardDesc: HTMLElement;

  if (typeof desc === 'string') {
    cardDesc = createElement('div', ['card-desc'], desc);
  } else {
    cardDesc = createElement('div', ['card-desc']);
    cardDesc.appendChild(desc);
  }

  const image = new Image();
  image.classList.add('card-img');
  image.src = img;

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
