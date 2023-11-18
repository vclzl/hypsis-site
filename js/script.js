let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector('nav').classList.add('is-visible');
  } else {
    // user has scrolled down
    document.querySelector('nav').classList.remove('is-hidden');
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});