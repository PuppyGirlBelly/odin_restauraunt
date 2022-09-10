import '../scss/main.scss';
import header from './header';
import footer from './footer';
import home from './home';

export default function populatePage() {
  header();
  home();
  footer();
}

populatePage();
