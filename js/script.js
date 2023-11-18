window.onload = function() {
    let scrollPos = 0;
    const nav = document.querySelector('#header-socials');
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
    window.addEventListener('scroll', checkPosition);
    let footnotes = document.querySelectorAll(".footnotes ol li");
    for (let i = 0; i < footnotes.length; i++) {
        let clone = document.createElement("div");
        clone.innerHTML = footnotes[i].innerHTML;
        clone.classList.add("margin-note");
        let footRef = document.querySelectorAll(".footnote-ref")[i].parentNode;
        footRef.parentNode.insertBefore(clone, footRef.nextSibling);
    }
    let backref = document.querySelectorAll(".margin-note .footnote-backref");
    for (let b = 0; b < backref.length; b++) {
        backref[b].remove();
    }
    orthotypo(document.body);
    spaces(document.body);
    exposants();
    noHyphens();
}