window.onload = function() {
    let scrollPos = 0;
    const nav = document.querySelector('#header-main');
    function checkPosition() {
        let windowY = window.scrollY;
        if (windowY < scrollPos) {
            nav.classList.add('is-visible');
            nav.classList.remove('is-hidden');
        } else {
            if (windowY > 200) {
                nav.classList.add('is-hidden');
                nav.classList.remove('is-visible');
            }
        }
        scrollPos = windowY;
    }