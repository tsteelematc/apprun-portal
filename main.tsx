import app from 'apprun';

app.on('#', _ => app.run('#Home'))

app.on('//', route => {
  const menus = document.querySelectorAll('.ms-Pivot-links li');
  for (let i = 0; i < menus.length; ++i) menus[i].classList.remove('is-selected');
  const item = document.querySelector(`[href='${route}']`);
  item && item.parentElement.classList.add('is-selected');
})

const linkStyles = {
  // backgroundColor: 'red'
  textDecorationColor: 'inherit'
  , textDecorationLine: 'none'
  , textDecorationStyle: 'inherit'
  , color: 'inherit'
};

const view = state => <div className="container">
  <nav className="ms-Pivot">
    <ul className="ms-Pivot-links">
      <li className="ms-Pivot-link is-selected">
        <a className="" style={linkStyles} href="#Home">Home</a>
      </li>
      <li className="ms-Pivot-link">
        <a className="" style={linkStyles} href="#About">About</a>
      </li>
      <li className="ms-Pivot-link" href="#Contact">
        <a className="" style={linkStyles} href="#Contact">Contact</a>
      </li>
    </ul>
  </nav>
  <div className="container" id="my-app"></div>
</div>

app.start('main', {}, view, {})

import Home from './Home';
import About from './About';
import Contact from './Contact';

const element = 'my-app';
new Home().mount(element);
new About().mount(element);
new Contact().mount(element);
