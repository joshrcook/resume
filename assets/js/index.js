import UIkit from 'uikit';

// Add functionality for color changes
(function() {
  const bodyEl = document.querySelector('body');

  // set the original body class
  bodyEl.classList.add('color-scheme');

  function getBodyClass(el) {
    return el.dataset.bodyClass;
  }

  UIkit.scrollspy('.uk-section', {
    offsetTop: window.innerHeight / 2 * -1,
    repeat: true,
    hidden: false,
  });
  
  UIkit.util.on('.uk-section', 'inview', (e) => {
    const bodyClass = getBodyClass(e.target);
    if( typeof bodyClass === 'undefined' ) return;
    bodyEl.classList.add(bodyClass);
  });
  
  UIkit.util.on('.uk-section', 'outview', (e) => {
    const bodyClass = getBodyClass(e.target);
    if( typeof bodyClass === 'undefined' ) return;
    bodyEl.classList.remove(bodyClass);
  });
}());


// Add animation functions
(function() {
  let liDelay = 500;

  document.querySelectorAll('.uk-subnav > li').forEach((el) => {
    UIkit.scrollspy(el, {
      cls: 'uk-animation-fade',
      delay: liDelay,
    });
    liDelay += 250;
  });

  UIkit.scrollspy('.uk-h1', {
    cls: 'uk-animation-fade uk-animation-slow',
    hidden: true,
    delay: 250,
  });

  UIkit.scrollspy('.uk-h2', {
    cls: 'uk-animation-slide-bottom-medium',
    offsetTop: window.innerHeight / -4,
  });

  document.querySelectorAll('.uk-h2').forEach((el) => {
    function addAnimRecursive(el) {
      UIkit.scrollspy(el, {
        cls: 'uk-animation-slide-bottom-medium', 
        offsetTop: window.innerHeight / -4,
      });
      // console.log(el.nextElementSibling);
      if (el.nextElementSibling !== null) {
        addAnimRecursive(el.nextElementSibling);
      }
    }
    addAnimRecursive(el.nextElementSibling);
  });
}());


(function() {
  // Set all sections to be at least the height of the viewport
  UIkit.heightViewport('.uk-section');
}());


(function() {
  // set the subnav li's to autoscroll to their respective links
  UIkit.scroll('.js-subnav a');
}());

