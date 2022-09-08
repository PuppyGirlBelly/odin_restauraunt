import '../scss/main.scss';
import populatePage from './home';

const content = populatePage();
document.body.appendChild(content);
