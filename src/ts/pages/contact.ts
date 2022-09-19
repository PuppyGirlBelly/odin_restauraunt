import '/src/scss/pages/contact.scss';
import { createElement } from '../common';

function contactTitle() {
  const title = createElement('h2', ['title'], 'CONTACT');

  return title;
}

function contactInfo() {
  const infoText =
    'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.';
  const info = createElement(
    'div',
    ['info-text', 'width-800px', 'light-on-dark'],
    infoText
  );

  return info;
}

export default function contact(): HTMLElement {
  const contact = createElement('div');

  contact.append(contactTitle());
  contact.append(contactInfo());

  return contact;
}
