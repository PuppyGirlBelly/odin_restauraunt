import "/src/scss/pages/contact.scss";
import { createElement } from "../common";

function contactTitle() {
  const title = createElement("h2", ["title"], "CONTACT");

  return title;
}

function contactInfo() {
  const infoText =
    "Location: 10329 82 Ave, River Grove, Washington\n\n \
     Email: contact@fatty.dog \n\n \
     Phone: 780 555 1337";
  const info = createElement(
    "div",
    ["info-text", "width-800px", "light-on-dark"],
    infoText
  );

  return info;
}

export default function contact(): HTMLElement {
  const contact = createElement("div");

  contact.append(contactTitle());
  contact.append(contactInfo());

  return contact;
}
