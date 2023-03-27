import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import Icon from './icon.png';
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
  // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  
  
    return element;
  }
  
  document.body.appendChild(component());