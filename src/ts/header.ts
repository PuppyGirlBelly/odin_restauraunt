import { createElement, createAnchor } from './functions';

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
  const item1 = createElement('li', ['nav-item']);
  const link1 = createAnchor('#', 'HOME');
  const item2 = createElement('li', ['nav-item']);
  const link2 = createAnchor('#', 'MENU');
  const item3 = createElement('li', ['nav-item']);
  const link3 = createAnchor('#', 'CONTACT');

  wrapper.appendChild(navBar);
  navBar.appendChild(navList);
  navList.append(item1, item2, item3);
  item1.append(link1);
  item2.append(link2);
  item3.append(link3);

  return wrapper;
}

// <div class="nav-bar">
//   <nav class="navigation width-800px">
//     <ul class="nav-list">
//       <li class="nav-item"><a href="#">HOME</a></li>
//       <li class="nav-item"><a href="#">MENU</a></li>
//       <li class="nav-item"><a href="#">CONTACT</a></li>
//     </ul>
//   </nav>
// </div>

export default function header(): HTMLElement {
  const header = document.createElement('header');

  header.appendChild(createLogo());
  header.appendChild(createNavBar());

  return header;
}
