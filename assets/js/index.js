import { scrollspy, util } from 'uikit';

const bodyEl = document.querySelector('body');

function getBodyClass(el) {
  return el.dataset.bodyClass;
}

scrollspy('.uk-section', {
  offsetTop: window.innerHeight / 2 * -1,
  repeat: true,
  hidden: false,
});

// set the original body class
bodyEl.classList.add('color-scheme');

util.on('.uk-section', 'inview', (e) => {
  const bodyClass = getBodyClass(e.target);
  if( typeof bodyClass === 'undefined' ) return;
  bodyEl.classList.add(bodyClass);
});

util.on('.uk-section', 'outview', (e) => {
  const bodyClass = getBodyClass(e.target);
  if( typeof bodyClass === 'undefined' ) return;
  bodyEl.classList.remove(bodyClass);
});

let liDelay = 250;
document.querySelectorAll('.uk-subnav > li').forEach((el) => {
  scrollspy(el, {
    cls: 'uk-animation-fade',
    delay: liDelay,
  });
  liDelay += 250;
});

scrollspy('.uk-h2, .uk-h2 + *', {
  cls: 'uk-animation-slide-bottom-medium',
  offsetTop: window.innerHeight / -4,
});