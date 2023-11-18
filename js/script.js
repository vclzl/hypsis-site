let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector('nav').classList.add('is-visible');
    document.querySelector('nav').classList.remove('is-hidden');
  } else {
        if(currentScrollPos > 200){
    // user has scrolled down
    document.querySelector('nav').classList.add('is-hidden');
    document.querySelector('nav').classList.remove('is-visible');
        }
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});
