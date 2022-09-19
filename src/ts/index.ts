import { createElement } from './common';
import header from './components/header';
import footer from './components/footer';
import home from './pages/home';
import menu from './pages/menu';
import contact from './pages/contact';

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
  // main.appendChild(home());
  // main.appendChild(menu());
  main.appendChild(contact());
  footer();
}

populatePage();
setNavEventListeners();
