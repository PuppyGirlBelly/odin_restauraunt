import '../scss/home.scss';

import {
  createAnchor,
  createElement,
  appendToContent,
  createTableRow,
} from './functions';

function hero(): HTMLElement {
  const hero = createElement('div', ['hero']);
  const wrapper = createElement('div', ['hero-text-wrapper']);
  const text1 = createElement('p', ['hero-text', 'big-text'], 'The most dog.');
  const newLine = createElement('br');
  const text2 = createElement(
    'p',
    ['hero-text', 'big-text'],
    'For the goodest dogs.'
  );

  hero.appendChild(wrapper);
  wrapper.append(text1, newLine, text2);

  return hero;
}

function whoWeAre(): HTMLElement {
  const header = createElement('h2', ['big-text'], 'Who we are');
  const whoWeAre = createElement(
    'div',
    ['light-on-dark', 'padding-1rem'],
    'This site is an experiment in building a site in '
  );
  const webpack = createAnchor('https://webpack.js.org/', ['link'], 'webpack');
  const annaLee = createAnchor('https://transbian.gay', ['link'], 'AnnaLee');

  whoWeAre.prepend(header);
  whoWeAre.append(webpack, ' by ', annaLee, '. A good Doggo.');

  return whoWeAre;
}

function hours(): HTMLElement {
  const header = createElement('h2', ['big-text'], 'Hours');
  const hours = createElement('div', ['light-on-dark', 'padding-1rem']);
  const table = createElement('table', ['hours', 'width-800px']);
  const tableRows: string[][] = [
    ['Sunday', '11:00 am - 7:00 pm'],
    ['Monday', 'CLOSED'],
    ['Tuesday', 'CLOSED'],
    ['Wednesday', '12:00 pm - 4:00 pm'],
    ['Thursday', '12:00 pm - 4:00 pm'],
    ['Friday', '12:00 pm - 10:00 pm'],
    ['Saturday', '11:00 am - 1:00 am'],
  ];
  let tr: HTMLElement;

  tableRows.forEach((row) => {
    tr = createTableRow(row);
    table.appendChild(tr);
  });

  hours.appendChild(header);
  hours.appendChild(table);

  return hours;
}

function location(): HTMLElement {
  const location = createElement(
    'div',
    ['light-on-dark', 'padding-1rem'],
    '10329 82 Ave, River Grove, Washington'
  );
  const header = createElement('h2', ['big-text'], 'Location');

  location.prepend(header);

  return location;
}

function belowFold(): HTMLElement {
  const belowFold = createElement('div', ['below-fold']);
  const about = createElement('div', ['width-600px', 'padding-1rem']);
  const em1 = createElement(
    'em',
    ['italic', 'bold', 'medium-text'],
    "Fatty Dog's Fat Dogs"
  );
  const em2 = createElement('em', ['bold'], 'bigger is better');
  const em3 = createElement('em', ['italic'], 'Good dog.');

  about.append(
    em1,
    ' knows you deserve the best. The best ingredients, The best toppings, and of course ',
    em2,
    ". That's why we only serve foot-long, grade-A, all-beef, hot dogs. Loaded with the best and most creative toppings that our Dogs can think of—especially our Original Dog Sauce. Sit down in the sun, get a fat dog, drink a craft beer, and treat yourself. ",
    em3
  );

  belowFold.appendChild(about);
  belowFold.appendChild(whoWeAre());
  belowFold.appendChild(hours());
  belowFold.appendChild(location());

  return belowFold;
}

export default function home(): HTMLElement {
  const home = createElement('div');

  home.appendChild(hero());
  home.appendChild(belowFold());

  return home;
}
