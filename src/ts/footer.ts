import { createElement, createAnchor, appendToContent } from './functions';
import GitIcon from '../img/github.svg';

export default function footer(): void {
  const footer = createElement('footer', ['footer']);
  const copy = createElement('p', ['footer-copy'], '© 2022 - AnnaLee | ');
  const gitLink = createAnchor(
    'https://github.com/softannalee/odin_restauraunt',
    ['link']
  );

  const gitImg = new Image();
  gitImg.classList.add('github-logo');
  gitImg.src = GitIcon;

  footer.appendChild(copy);
  copy.append(gitLink);
  gitLink.appendChild(gitImg);

  appendToContent(footer);
}
