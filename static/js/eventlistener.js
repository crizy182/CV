const ipad = window.matchMedia('screen and (max-width: 769px)');
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');
import data from './data.json';

console.log(burgerButton);
function showHide() {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
  } else {
    menu.classList.add('is-active');
  }
}

if (ipad.matches)
  burgerButton.addEventListener('click', hideShow);
ipad.addListener((event) => {
  if (event.matches)
    burgerButton.addEventListener('click', hideShow);
  else
    burgerButton.removeEventListener('click', hideShow);
});

function hideShow() {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
  } else {
    menu.classList.add('is-active');
  }
}


