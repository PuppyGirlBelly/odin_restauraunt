function createElement(type: string, classes?: string[]): HTMLElement {
  const element = document.createElement(type);

  if (classes.length >= 1) {
    classes.forEach((c) => {
      element.classList.add(c);
    });
  }

  return element;
}

function createLogo(): HTMLElement {
  const logo = createElement('div', ['logo', 'width-800px']);
  const logoText = createElement('h1', ['logo-text']);
  const logo1 = createElement('span', ['logo-1']);
  logo1.innerText = "fatty dog's";
  const logo2 = createElement('span', ['logo-2']);
  logo2.innerText = 'fat dogs';

  logoText.append(logo1, logo2);
  logo.appendChild(logoText);

  return logo;
}

export default function populatePage() {
  const content = document.getElementById('content');

  content.appendChild(createLogo());
  content.appendChild(createElement('div', ['nav-bar']));

  return content;
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
// <div class="hero">
//   <div class="hero-text-wrapper">
//     <p class="hero-text big-text">The most dog.</p>
//     <br>
//     <p class="hero-text big-text">For the goodest dogs.</p>
//   </div>
// </div>
// <main class="below-fold">
//   <div class="width-600px padding-1rem"><em class="italic bold medium-text">Fatty Dog's Fat Dogs</em> knows you deserve the best. The best ingredients, The best toppings, and of course <em class="bold">bigger is better</em>. That's why we only serve foot-long, grade-A, all-beef, hot dogs. Loaded with the best and most creative toppings that our Dogs can think of—especially our Original Dog Sauce. Sit down in the sun, get a fat dog, drink a craft beer, and treat yourself. <em class="italic">Good dog.</em></div>
//   <div class="light-on-dark padding-1rem">
//     <h2 class="big-text">Who we are</h2>
//     This site is an experiment in building a site in <a href="https://webpack.js.org/" class="link">webpack</a> by <a href="https://transbian.gay" class="link">AnnaLee</a>. A good doggo.
//   </div>
//   <div class="light-on-dark padding-1rem">
//     <h2 class="big-text">Hours</h2>
//     <table class="hours width-800px">
//       <tr>
//         <td>Sunday</td><td> 11:00am-7:00pm</td>
//       </tr>
//       <tr>
//         <td>Monday</td><td> CLOSED</td>
//       </tr>
//       <tr>
//         <td>Tuesday</td><td> CLOSED</td>
//       </tr>
//       <tr>
//         <td>Wednesday</td><td> 12:00pm-4:00pm</td>
//       </tr>
//       <tr>
//         <td>Thursday</td><td> 12:00pm-4:00pm</td>
//       </tr>
//       <tr>
//         <td>Friday</td><td> 12:00pm-10:00pm</td>
//       </tr>
//       <tr>
//         <td>Saturday</td><td> 12:00pm-1:00am</td>
//       </tr>
//     </table>
//   </div>
//   <div class="light-on-dark padding-1rem">
//     <h2 class="big-text">Location</h2>
//     10329 82 Ave, River Grove, Washington
//   </div>
// </main>
// <footer class="footer">
//   <p class="footer-copy">
//     © 2022 - AnnaLee | <a href="https://github.com/softannalee/odin_restauraunt" class="link"><img src="./img/github.svg" alt="view source on github" class="github-logo"></a>
//   </p>
// </footer>
