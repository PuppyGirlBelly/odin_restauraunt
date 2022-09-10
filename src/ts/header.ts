import { createElement, createAnchor, appendToContent } from './functions';

function createLogo(): HTMLElement {
  const logo = createElement('div', ['logo', 'width-800px']);
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
  const item2 = createElement('li', ['nav-item'], 'MENU');
  const item3 = createElement('li', ['nav-item'], 'CONTACT');

  wrapper.appendChild(navBar);
  navBar.appendChild(navList);
  navList.append(item1, item2, item3);

  return wrapper;
}

export default function header(): void {
  appendToContent(createLogo());
  appendToContent(createNavBar());
}
