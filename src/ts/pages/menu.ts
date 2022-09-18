import '/src/scss/pages/menu.scss';
import { createCard, createElement, createList } from '../common';
import plainDog from '/src/img/dog_plain.png';
import chiliDog from '/src/img/dog_chiliCheese.png';
import spicyDog from '/src/img/dog_hotNSpicy.png';
import chickDog from '/src/img/dog_chicken.png';
import friesSide from '/src/img/side_fries.png';
import poutiSide from '/src/img/side_poutine.png';
import chipsSide from '/src/img/side_chips.png';
import popImg from '/src/img/drink_coke.png';

function menuTitle() {
  const title = createElement('h2', ['title'], 'MENU');

  return title;
}

function dogsHeader() {
  const header = createElement('h3', ['header'], 'Fat Dogs');
  const description = createElement(
    'p',
    ['medium-text'],
    'All of our foot-long all-beef hot dogs come from local sources!'
  );

  header.appendChild(description);

  return header;
}

function dogs() {
  const dogs = createElement('div', ['dog-cards']);
  const card1 = createCard(
    plainDog,
    'Plain+ Dog!',
    "A plain dog! But not just a plain dog! We will add any toppings you \
    want, just ask one of our staff for a list and we'll build it to your \
    liking! Or keep it plain! \n\n $4.00"
  );
  const card2 = createCard(
    chiliDog,
    'Chili Cheese Dog!',
    'A classic Chili Cheese Dog! Gots the chili on it, and the cheese, some \
    grilled onions, and an all-beef dog sitting on a bed of our Signature Dog \
    Sauce! \n\n $8.00'
  );
  const card3 = createCard(
    spicyDog,
    "The Hot 'n Spicy Dog!",
    'A real hot dog! Made fresh with our spicy pepper relish, cilantro, \
    jalapeño aoili and our Signature Dog Sauce! \n\n $6.00'
  );
  const card4 = createCard(
    chickDog,
    'The Chicken Dog!',
    'The chaotic good dog! Have a chicken tender seated in a bun with \
    Japanese Mayo and Sweet Chili Sauce! Or ask our staff for other toppings! \
    \n\n $6.00'
  );

  dogs.append(card1, card2, card3, card4);

  return dogs;
}

function sideHeader(): HTMLElement {
  const header = createElement('div', ['header']);
  const subheader = createElement('h3', ['big-text', 'light-on-dark'], 'Sides');
  const description = createElement(
    'p',
    ['medium-text'],
    'If you thought our dogs were good, try our sides!'
  );

  header.appendChild(subheader);
  subheader.appendChild(description);

  return header;
}

function fries() {
  const friesDesc = createElement(
    'div',
    undefined,
    'Your classic shoestring french fries, made with russet potatoes and \
    premium seasonings! Comes with your choice of ketchup, japanese mayo, or \
    jalapeño aoili!\n'
  );
  const friesList = createList(false, [
    'Sea Salt Fries',
    'Spicy Cajun Fries',
    'Garlic Fries',
    'Curry Fries',
  ]);
  const friesPrice = createElement(
    'p',
    ['medium-text'],
    '\nSmall: $2.50 | Large: $5.00'
  );

  friesDesc.append(friesList, friesPrice);

  const fries = createCard(friesSide, 'Fries!', friesDesc);

  return fries;
}

function poutine() {
  const poutineDesc = createElement(
    'div',
    undefined,
    'Our favorite poutine, made with russet potatoes, sausage gravy, and \
    topped with our meanest spices! Go ahead, treat yourself!\n\n'
  );
  const poutineList = createList(false, [
    'Classic Poutine',
    'Pulled Pork Poutine',
    'Japanese Curry Poutine',
    'Vegan Poutine (No curds, vegan gravy, and all the best veggies!)',
  ]);
  const poutinePrice = createElement(
    'p',
    ['medium-text'],
    '\nSmall: $4.00 | Large: $7.00'
  );

  poutineDesc.append(poutineList, poutinePrice);

  const poutine = createCard(poutiSide, 'Poutine!', poutineDesc);

  return poutine;
}

function chips() {
  const chipsDesc = createElement(
    'div',
    undefined,
    'Your favorite classic snacks, what goes better with (or on top) of a good\
    dog?\n\n'
  );
  const chipsList = createList(false, [
    'Lays Original',
    'Lays Barbeque',
    'Lays Salt and Vinegar',
    'Ruffles All Dressed',
    'Doritos Nacho Cheese',
    'Doritos Cool Ranch',
  ]);
  const chipsPrice = createElement('p', ['medium-text'], '\n$2.00');

  chipsDesc.append(chipsList, chipsPrice);

  const chips = createCard(chipsSide, 'Chips!', chipsDesc);

  return chips;
}

function sides() {
  const sides = createElement('div', ['sides-cards']);

  sides.append(fries());
  sides.append(poutine());
  sides.append(chips());

  return sides;
}

function drinkHeader(): HTMLElement {
  const header = createElement('div', ['header']);
  const subheader = createElement(
    'h3',
    ['big-text', 'light-on-dark'],
    'Drinks'
  );
  const description = createElement('p', ['medium-text'], '');

  header.appendChild(subheader);
  subheader.appendChild(description);

  return header;
}

function pops(): HTMLElement {
  const popDesc = createElement('div', undefined, '');
  const popList = createList(false, [
    'Coca-Cola',
    'Diet Coke',
    "Barq's RootBeer",
    'Sprite',
    'Orange Crush',
  ]);
  const popPrice = createElement('p', ['medium-text'], '\n$2.00');

  popDesc.append(popList, popPrice);

  const pop = createCard(popImg, 'Cans of Pop!', popDesc);

  return pop;
}

function beer(): HTMLElement {
  const beer = createCard(
    '',
    'Craft Beer!',
    'Our craft beer rotates out on a\
    monthly basis. Please ask our staff about our latest offering!\n\n$8.00'
  );

  return beer;
}

function drinks() {
  const drinks = createElement('div', ['drink-cards']);

  drinks.appendChild(pops());
  drinks.appendChild(beer());

  return drinks;
}

export default function menu(): HTMLElement {
  const menu = createElement('div');

  menu.appendChild(menuTitle());
  menu.appendChild(dogsHeader());
  menu.appendChild(dogs());
  menu.appendChild(sideHeader());
  menu.appendChild(sides());
  menu.appendChild(drinkHeader());
  menu.appendChild(drinks());

  return menu;
}
