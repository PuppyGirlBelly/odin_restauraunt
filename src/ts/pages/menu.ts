import '/src/scss/pages/menu.scss';
import { createCard, createElement } from '../common';
import plainDog from '/src/img/dog_plain.png';
import chiliDog from '/src/img/dog_chiliCheese.png';
import spicyDog from '/src/img/dog_hotNSpicy.png';
import chickDog from '/src/img/dog_chicken.png';

function dogsHeader() {
  const header = createElement('h2', ['title'], 'MENU');
  const subheader = createElement(
    'h3',
    ['big-text', 'light-on-dark'],
    'Fat Dogs'
  );
  const description = createElement(
    'p',
    ['medium-text'],
    'All of our foot-long all-beef hot dogs come from local sources!'
  );

  header.appendChild(subheader);
  subheader.appendChild(description);

  return header;
}

function dogs() {
  const dogs = createElement('div', ['menu-cards']);
  const card1 = createCard(
    plainDog,
    'Plain+ Dog!',
    "A plain dog! But not just a plain dog! We will add any toppings you want, just ask one of our staff for a list and we'll build it to your liking! Or keep it plain! $4.00"
  );
  const card2 = createCard(
    chiliDog,
    'Chili Cheese Dog!',
    'A classic Chili Cheese Dog! Gots the chili on it, and the cheese, some grilled onions, and an all-beef dog sitting on a bed of our Signature Dog Sauce! $8.00'
  );
  const card3 = createCard(
    spicyDog,
    "The Hot 'n Spicy Dog!",
    'A real hot dog! Made fresh with our spicy pepper relish, cilantro, and our Signature Dog Sauce! $6.00'
  );
  const card4 = createCard(
    chickDog,
    'The Chicken Dog!',
    'The chaotic good dog! Not a spec of sausage in these! Have a chicken tender seated in a bun with your option of any combination Plum Sauce, Sweet Chili Sauce, Japanese Mayo, Ketchup, and/or our Signature Dog Sauce! $6.00'
  );

  dogs.append(card1, card2, card3, card4);

  return dogs;
}

function sides(): HTMLElement {
  const header = createElement('div', ['sides', 'title']);
  const subheader = createElement('h3', ['big-text', 'light-on-dark'], 'Sides');
  const description = createElement(
    'p',
    ['medium-text'],
    'All sides are $2.50'
  );

  header.appendChild(subheader);
  subheader.appendChild(description);

  return header;
}

export default function menu(): HTMLElement {
  const menu = createElement('div');

  menu.appendChild(dogsHeader());
  menu.appendChild(dogs());
  menu.appendChild(sides());

  return menu;
}
