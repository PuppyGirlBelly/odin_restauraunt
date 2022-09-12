import '/src/scss/pages/menu.scss';
import { createCard, createElement } from '../common';

function dogs() {
  const header = createElement('h2', ['title'], 'MENU');
  const subheader = createElement('h3', ['big-text'], 'Dogs');

  header.appendChild(subheader);

  createCard

  return header;
}

export default function menu(): HTMLElement {
  const menu = createElement('div');

  menu.appendChild(dogs());

  return menu;
}
