var images = document.querySelectorAll('img');

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function slideImages() {
  images.forEach (img => {
    if ( img.y <= 780 ) { img.classList.add( 'active' ); }
    if ( img.y <= -img.height ) { img.classList.remove( 'active'); }
  });
}

window.addEventListener( 'scroll', debounce( slideImages, 18 ));