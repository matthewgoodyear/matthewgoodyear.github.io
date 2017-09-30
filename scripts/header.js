function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

function showHeader (e) {
    console.log('scrolling');
    var elem = document.querySelector('.sticky-header');

    if (window.scrollY > 250) {
        if (elem.classList.contains('sticky-hide')) {
            elem.classList.remove('sticky-hide');
            elem.classList.add('sticky-show');
        }
    } else {
        if (elem.classList.contains('sticky-show')) {
            elem.classList.remove('sticky-show');
            elem.classList.add('sticky-hide');
        }
    }
}

// Check if classList exists before adding event listener.
if ('classList' in document.createElement('span')) {
    window.addEventListener('scroll', throttle(showHeader, 100));
}
