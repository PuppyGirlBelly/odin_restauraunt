import '../../scss/pages/home.scss';
import { createAnchor, createElement, createTableRow } from '../common';

function hero(): HTMLElement {
  const heroImage = createElement('div', ['hero']);
  const wrapper = createElement('div', ['hero-text-wrapper']);
  const text1 = createElement('p', ['hero-text', 'big-text'], 'The most dog.');
  const newLine = createElement('br');
  const text2 = createElement(
    'p',
    ['hero-text', 'big-text'],
    'For the goodest dogs.'
  );

  heroImage.appendChild(wrapper);
  wrapper.append(text1, newLine, text2);

  return heroImage;
}

function whoWeAre(): HTMLElement {
  const header = createElement('h2', ['big-text'], 'Who we are');
  const wwaDiv = createElement(
    'div',
    ['light-on-dark', 'padding-1rem'],
    'This site is an experiment in building a site in '
  );
  const webpack = createAnchor(['link'], 'webpack', 'https://webpack.js.org/');
  const annaLee = createAnchor(['link'], 'AnnaLee', 'https://transbian.gay');

  wwaDiv.prepend(header);
  wwaDiv.append(webpack, ' by ', annaLee, '. A good Doggo.');

  return wwaDiv;
}

function hours(): HTMLElement {
  const header = createElement('h2', ['big-text'], 'Hours');
  const hoursDiv = createElement('div', ['light-on-dark', 'padding-1rem']);
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

  hoursDiv.appendChild(header);
  hoursDiv.appendChild(table);

  return hoursDiv;
}

function location(): HTMLElement {
  const locationDiv = createElement(
    'div',
    ['light-on-dark', 'padding-1rem'],
    '10329 82 Ave, River Grove, Washington'
  );
  const header = createElement('h2', ['big-text'], 'Location');

  locationDiv.prepend(header);

  return locationDiv;
}

function belowFold(): HTMLElement {
  const belowFoldDiv = createElement('div', ['below-fold']);
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

  belowFoldDiv.appendChild(about);
  belowFoldDiv.appendChild(whoWeAre());
  belowFoldDiv.appendChild(hours());
  belowFoldDiv.appendChild(location());

  return belowFoldDiv;
}

export default function home(): HTMLElement {
  const homeDiv = createElement('div');

  homeDiv.appendChild(hero());
  homeDiv.appendChild(belowFold());

  return homeDiv;
}
