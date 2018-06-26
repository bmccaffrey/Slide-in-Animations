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

var images = document.querySelectorAll('img');



// function slideImages() {
//   images.forEach( image => {
//     const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
//     const isHalfShown = slideInAt > image.offsetTop;
//     if(isHalfShown){image.classList.add('active');}});}

var x = images[0];


function slideImages() {
  images.forEach (img => {
    if ( img.y <= 780 ) {
      img.classList.add( 'active' );
    }
    if ( img.y <= -img.height ) {
      img.classList.remove( 'active');
    }
  });
}

function test() {
  var x = images[0];
  console.log(x.y);
  
}

window.addEventListener( 'scroll', debounce( slideImages, 18 ));
// window.addEventListener( 'scroll', test );