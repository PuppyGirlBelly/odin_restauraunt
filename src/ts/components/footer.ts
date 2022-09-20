import '../../scss/components/footer.scss';
import GitIcon from '../../img/github.svg';
import { createElement, createAnchor, appendToContent } from '../common';

export default function footer(): void {
  const footerDiv = createElement('footer', ['footer']);
  const copy = createElement('p', ['footer-copy'], '© 2022 - AnnaLee | ');
  const gitLink = createAnchor(
    ['link'],
    undefined,
    'https://github.com/softannalee/odin_restauraunt'
  );

  const gitImg = new Image();
  gitImg.classList.add('github-logo');
  gitImg.src = GitIcon;

  footerDiv.appendChild(copy);
  copy.append(gitLink);
  gitLink.appendChild(gitImg);

  appendToContent(footerDiv);
}
