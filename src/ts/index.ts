import '../scss/main.scss';
import { createElement } from './functions';
import header from './header';
import home from './home';
import menu from './menu';
import contact from './contact';
import footer from './footer';

function clearMain(child: HTMLElement): void {
  let main = document.getElementById('main');

  if (main !== null) {
    main.innerText = '';
    main.appendChild(child);
  }
}

function setHome(): void {
  clearMain(home());
}

function setMenu(): void {
  clearMain(menu());
}

function setContact(): void {
  clearMain(contact());
}

function setNavEventListeners(): void {
  let homeBtn = document.getElementById('home');
  let menuBtn = document.getElementById('menu');
  let contactBtn = document.getElementById('contact');

  homeBtn.addEventListener('click', setHome);
  menuBtn.addEventListener('click', setMenu);
  contactBtn.addEventListener('click', setContact);
}

export default function populatePage() {
  const content = document.getElementById('content');
  const main = createElement('main');
  main.id = 'main';

  header();
  content.appendChild(main);
  main.appendChild(home());
  footer();
}

populatePage();
setNavEventListeners();
