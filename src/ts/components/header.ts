import '../../scss/components/header.scss';
import { createElement, appendToContent } from '../common';

function createLogo(): HTMLElement {
  const logo = createElement('div', ['logo']);
  const logoText = createElement('h1', ['logo-text']);
  const logo1 = createElement('span', ['logo-1'], "fatty dog's");
  const logo2 = createElement('span', ['logo-2'], 'fat dogs');

  logoText.append(logo1, logo2);
  logo.appendChild(logoText);

  return logo;
}

function createNavBar(): HTMLElement {
  const wrapper = createElement('div', ['nav-bar']);
  const navBar = createElement('nav', ['navigation', 'width-800px']);
  const navList = createElement('ul', ['nav-list']);
  const item1 = createElement('li', ['nav-item'], 'HOME');
  item1.id = 'home';
  item1.tabIndex = 1;
  const item2 = createElement('li', ['nav-item'], 'MENU');
  item2.id = 'menu';
  item2.tabIndex = 2;
  const item3 = createElement('li', ['nav-item'], 'CONTACT');
  item3.id = 'contact';
  item3.tabIndex = 3;

  wrapper.appendChild(navBar);
  navBar.appendChild(navList);
  navList.append(item1, item2, item3);

  return wrapper;
}

export default function header(): void {
  appendToContent(createLogo());
  appendToContent(createNavBar());
}
